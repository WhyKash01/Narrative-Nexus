import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const postId = Number(searchParams.get('postId'));

    if (!postId) {
      return NextResponse.json({ error: 'Missing required field: postId' }, { status: 400 });
    }

    const comments = await prisma.comment.findMany({
      where: { postId, parentId: null }, // Fetch only top-level comments
      include: {
        author: true,
        children: {
          include: { author: true },
          orderBy: { createdAt: 'asc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
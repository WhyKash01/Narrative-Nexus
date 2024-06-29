// pages/api/comments/add.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  try {
    const { content, authorId, postId, parentId } = await req.json();

    if (!content || !authorId || (!postId && !parentId)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newComment = await prisma.comment.create({
      data: {
        content,
        authorId,
        postId,
        parentId,
      },
    });

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

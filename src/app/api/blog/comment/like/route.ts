// pages/api/comments/like.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  try {
    const { commentId, userId, type } = await req.json();

    if (!commentId || !userId || !['LIKE', 'DISLIKE'].includes(type)) {
      return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
    }

    // Check for existing like/dislike by the same user
    const existingLike = await prisma.commentLike.findFirst({
      where: { commentId, userId },
    });

    if (existingLike) {
      if (existingLike.type === type) {
        // User is toggling the like/dislike off
        await prisma.commentLike.delete({ where: { id: existingLike.id } });
        await prisma.comment.update({
          where: { id: commentId },
          data: type === 'LIKE' ? { likes: { decrement: 1 } } : { dislikes: { decrement: 1 } },
        });
      } else {
        // User is changing from like to dislike or vice versa
        await prisma.commentLike.update({
          where: { id: existingLike.id },
          data: { type },
        });
        await prisma.comment.update({
          where: { id: commentId },
          data: {
            likes: type === 'LIKE' ? { increment: 1 } : { decrement: 1 },
            dislikes: type === 'DISLIKE' ? { increment: 1 } : { decrement: 1 },
          },
        });
      }
    } else {
      // Add a new like/dislike
      await prisma.commentLike.create({
        data: { commentId, userId, type },
      });
      await prisma.comment.update({
        where: { id: commentId },
        data: type === 'LIKE' ? { likes: { increment: 1 } } : { dislikes: { increment: 1 } },
      });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Error handling like/dislike:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

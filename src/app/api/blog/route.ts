import { NextRequest, NextResponse } from "next/server";
import zod from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  try {
    const { authorId, content, title, thumbnail, topic } = await req.json();

    if (!authorId || !content || !title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: authorId },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userDetail = await prisma.userDetail.findUnique({
      where: { userId: authorId },
    });

    if (!userDetail) {
      return NextResponse.json({ error: 'User details not found' }, { status: 404 });
    }

    const username = user.username ?? 'UnknownUser';
    const profilePhoto = userDetail.profilePhoto ?? '';

    const post = await prisma.blog.create({
      data: {
        Prophoto: profilePhoto,
        Uname: username,
        authorId: authorId,
        content: content,
        title: title,
        thumbnail: thumbnail,
        topic: topic,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: any) {
  const posts = await prisma.blog.findMany({
  });
  return NextResponse.json(posts);
}
//postgres://avnadmin:AVNS_kqm0qUYDJEfRx22JlTk@pg-28ea5e11artical-itsyash9211-bde1.l.aivencloud.com:17594/defaultdb?sslmode=require
//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiODE1YTU5ZDctZTkyNC00ZWRmLWEwN2QtMjJkYTFjNWJmOTU3IiwidGVuYW50X2lkIjoiZGVhNzVmZTZiZDQyNmRkMzExNDk1NGNlZDVjNTVhMjMyYzhlOWEzZWRhNWUyNDlkZWZjYTNiYzMzODViMDE0NSIsImludGVybmFsX3NlY3JldCI6ImQ0MzVmMzI5LTc5YWUtNGFjNi1iYjRlLTZjN2E3MzNjMjM0ZSJ9.s1kbW1fFI3kjGBg2LZMu8zbgLKrccDxILLhpQV0wu0E"

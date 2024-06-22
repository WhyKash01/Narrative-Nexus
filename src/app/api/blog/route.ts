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
export async function PUT(req: NextRequest) {
  try {
    const { id, authorId, content, title, thumbnail, topic } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Blog post ID is required' }, { status: 400 });
    }

    if (!authorId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if the blog post exists
    const existingPost = await prisma.blog.findUnique({
      where: { id },
    });

    if (!existingPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    // Validate the author exists
    const user = await prisma.user.findUnique({
      where: { id: authorId },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Validate user details
    const userDetail = await prisma.userDetail.findUnique({
      where: { userId: authorId },
    });

    if (!userDetail) {
      return NextResponse.json({ error: 'User details not found' }, { status: 404 });
    }

    const updateData: any = {
      ...(content!== "" && { content }),
      ...(title!== "" && { title }),
      ...(thumbnail!== "" && { thumbnail }),
      ...(topic!== "" && { topic }),
    };
    // Update the blog post
    const updatedPost = await prisma.blog.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    // Parse JSON body
    let { id } = await req.json();
    id=Number(id)
    // Validate 'id'
    if (!id) {
      return NextResponse.json(
        { error: 'Blog post ID is required' },
        { status: 400 }
      );
    }

    // Check if the blog post exists
    const existingPost = await prisma.blog.findUnique({
      where: { id },
    });

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Delete the blog post
    await prisma.blog.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: 'Blog post deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    // Log the error for debugging
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
//postgres://avnadmin:AVNS_kqm0qUYDJEfRx22JlTk@pg-28ea5e11artical-itsyash9211-bde1.l.aivencloud.com:17594/defaultdb?sslmode=require
//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiODE1YTU5ZDctZTkyNC00ZWRmLWEwN2QtMjJkYTFjNWJmOTU3IiwidGVuYW50X2lkIjoiZGVhNzVmZTZiZDQyNmRkMzExNDk1NGNlZDVjNTVhMjMyYzhlOWEzZWRhNWUyNDlkZWZjYTNiYzMzODViMDE0NSIsImludGVybmFsX3NlY3JldCI6ImQ0MzVmMzI5LTc5YWUtNGFjNi1iYjRlLTZjN2E3MzNjMjM0ZSJ9.s1kbW1fFI3kjGBg2LZMu8zbgLKrccDxILLhpQV0wu0E"

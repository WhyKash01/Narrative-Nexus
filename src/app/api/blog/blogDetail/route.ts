import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req: NextRequest){
    const body = await req.json();
    const posts = await prisma.blog.findMany({
        where:{
            authorId: body.id
        }
    })
    return NextResponse.json(posts);
}
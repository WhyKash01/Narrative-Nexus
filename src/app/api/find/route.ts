import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req: NextRequest){
    const body = await req.json();
    
    const accounts = await prisma.user.findMany({
        where:{
            username:{
                startsWith: body.username.toString(),
                mode: 'insensitive',
            }
        }
    })
    return NextResponse.json(accounts);
}
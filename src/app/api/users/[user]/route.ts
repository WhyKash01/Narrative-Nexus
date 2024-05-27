import { NextRequest, NextResponse } from "next/server";
import User from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { number } from "zod";
const zod = require("zod");
const prisma = new PrismaClient();
const userDetail = zod.object({
    email: zod.string(),
    authenticate: zod.boolean()
  });

export async function POST(req: NextRequest){
    const body = await req.json();
    const { success } = userDetail.safeParse(body);
  if (!success) {
    return NextResponse.json({
      message: "user not loggedin",
    });
  }
  if(!body.authenticate){
    return NextResponse.json({
        message: "user not loggedin",
      });
  }
  const User = await prisma.user.findUnique(
    {
        where:{
            email: body.email
        }
    })
    const userdetail= await prisma.userDetail.findMany(
        {
            where:{
                userId: User!.id
            }
        });
    return NextResponse.json({
        userdetail
      });
}
export function PUT(request: any) {}

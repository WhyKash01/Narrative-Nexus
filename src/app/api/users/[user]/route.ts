import { NextRequest, NextResponse } from "next/server";
import User from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const zod = require("zod");
const prisma = new PrismaClient();
const userDetail = zod.object({
    id: zod.number(),
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
  const user = await prisma.user.findUnique(
    {
        where: {
            id: body.id
        }
    });
    return NextResponse.json({
        user 
      });
}
export function PUT(request: any) {}

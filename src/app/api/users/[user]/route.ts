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
export async function PUT(req: NextRequest) {
  const body = await req.json();
  
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
      
    const updateData: any = {
      ...(body.bio && { bio: body.bio }),
      ...(body.profilePhoto!== "" && { profilePhoto: body.profilePhoto }),
      ...(body.coverPhoto !== "" && { coverPhoto: body.coverPhoto })
    };
    const userData: any = {
      ...(body.name!="" && { name: body.name })
    };
    
    const detail= await prisma.userDetail.update({
          where:{
              userId: User!.id
          },
          data: updateData
          
      });
      const user= await prisma.user.update({
        where:{
            id: User!.id
        },
        data: userData
        
    });
  return NextResponse.json({
    detail
    });
}
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
        data:{
          userdetail,User
        }
      });
}
export async function GET(req: NextRequest){
  try {
    // Parse the URL to extract query parameters
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');

    if (!username) {
      return NextResponse.json({ message: 'username query parameter is required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const userDetails = await prisma.userDetail.findMany({
      where: { userId: user.id },
    });
    const posts = await prisma.blog.findMany({
      where:{
          authorId: user.id
      }
  })
  const data={user,posts,userDetails}
    return NextResponse.json({ data });
  } catch (error) {
    // Use type assertion to handle unknown type
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ message: 'Internal server error', error: errorMessage }, { status: 500 });
  }
}


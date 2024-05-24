import { NextRequest, NextResponse } from "next/server";
import User from "@prisma/client"
import { PrismaClient } from '@prisma/client';
const zod = require("zod")
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const signupBody = zod.object({
    username: zod.string().email(),
	name: zod.string(),
	password: zod.string()
})

export async function POST(req: NextRequest){
    
    const body = await req.json();
    const { success } = signupBody.safeParse(body)
    if (!success) {
        return NextResponse.json({
            message: "Incorrect inputs"
        })
    }
    const saltRounds = 10;
    const hash = await bcrypt.hash(body.password, saltRounds);
    try {
        const newUser = await prisma.user.create({
        
            data: {
                username: body.username,
                name: body.name, 
                password: hash
            },
          });
        const response= {...newUser, authenticate: true}
        const name = "acc created";
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(
            {
                message:"Email already taken",
                authenticate: false
            })
    }
}
export function GET(request: any){
    
}
export function PUT(request: any){
    
}

// router.post("/signup", async (req, res) => {
//     const { success } = signupBody.safeParse(req.body)
//     if (!success) {
//         return res.status(411).json({
//             message: "Email already taken / Incorrect inputs"
//         })
//     }

//     const existingUser = await User.findOne({
//         username: req.body.username
//     })

//     if (existingUser) {
//         return res.status(411).json({
//             message: "Email already taken/Incorrect inputs"
//         })
//     }

//     const user = await User.create({
//         username: req.body.username,
//         password: req.body.password,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//     })
//     const userId = user._id;

//     await Account.create({
//         userId,
//         balance: 1 + Math.random() * 10000
//     })

//     const token = jwt.sign({
//         userId
//     }, JWT_SECRET);

//     jwt.

//     res.json({
//         message: "User created successfully",
//         token: token
//     })
// })
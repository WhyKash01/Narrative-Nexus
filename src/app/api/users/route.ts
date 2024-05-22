import { NextResponse } from "next/server";
import User from "@prisma/client"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function POST(request: any){

    const newUser = await prisma.user.create({
        data: {
            username: "harkirat@gmail.com",
            id: 1 ,
            name: "", 
            password: ""
  
        },
      });
      console.log(newUser);
    const name = "yash";

    // const existingUser = await User.findOne({
    //     username: req.body.username
    // })

    // const user=[{
    //     name: "sda",
    //     phone: "9456"
    // },
    // {
    //     name: "dfaa",
    //     phone: "9asd6"
    // }];
    return NextResponse.json(name);
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
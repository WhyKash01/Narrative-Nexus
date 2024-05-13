import { NextResponse } from "next/server";

export function POST(request: any){
    const user=[{
        name: "sda",
        phone: "9456"
    },
    {
        name: "dfaa",
        phone: "9asd6"
    }];
    return NextResponse.json(user);
}
export function GET(request: any){
    
}
export function PUT(request: any){
    
}
//postgres://avnadmin:AVNS_kqm0qUYDJEfRx22JlTk@pg-28ea5e11artical-itsyash9211-bde1.l.aivencloud.com:17594/defaultdb?sslmode=require
//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiODE1YTU5ZDctZTkyNC00ZWRmLWEwN2QtMjJkYTFjNWJmOTU3IiwidGVuYW50X2lkIjoiZGVhNzVmZTZiZDQyNmRkMzExNDk1NGNlZDVjNTVhMjMyYzhlOWEzZWRhNWUyNDlkZWZjYTNiYzMzODViMDE0NSIsImludGVybmFsX3NlY3JldCI6ImQ0MzVmMzI5LTc5YWUtNGFjNi1iYjRlLTZjN2E3MzNjMjM0ZSJ9.s1kbW1fFI3kjGBg2LZMu8zbgLKrccDxILLhpQV0wu0E"
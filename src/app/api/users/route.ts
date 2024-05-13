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
"use client"
import { useEffect, useState } from "react";
import React from "react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import Axios from "axios";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { userdetail } from "@/store/atom";

const page = () => {
    const session = useSession();
    const [userDetail, setuserdetail]= useRecoilState<any>(userdetail)
    const [Title, setTitle]= useState("")
    const [Topic, setTopic]= useState("Topic")
    const [Content, setContent]= useState("")
    const [Photo, setPhoto]= useState("")
    useEffect(() => {
      
        Axios.post(`http://localhost:3000/api/users/hasdj`, {
        email: session.data?.user?.email,
        authenticate: (session.status == "authenticated")?true:false
        }).then(res=>{
          console.log(res.data.userdetail)
          
          setuserdetail(res.data.userdetail[0])
        })
    
  }, [])
  return (
    <div>
      <Header></Header>
      <div className=" mt-[10vh] mx-10 h-[80vh] rounded-md">
        <div className="mb-2 font-bold ml-2">Title</div>
        <div className="flex justify-between gap-10">
          <Input placeholder="Title" onChange={(e:any)=>{
        setTitle(e.target.value)
      }} className="" type="text" />
          <DropdownMenu>
            <DropdownMenuTrigger className="px-10 rounded-md bg-zinc-700 ">{Topic}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={()=>{
                setTopic("Sports")
              }}>Sports</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>{
                setTopic("Movies")
              }}>Movies</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>{
                setTopic("Politics")
              }}>Politics</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>{
                setTopic("Movies")
              }}>Movies</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="mt-5 ml-2 font-bold">Content</div>
        <Textarea onChange={(e:any)=>{
        setContent(e.target.value)
      }} className="mt-2 " placeholder="Content" />
        
        <Button onClick={async()=>{
            
            Axios.post("http://localhost:3000/api/blog",{
                authorId: userDetail.id,
                topic: Topic,
                title: Title,
                content: Content
            })
            .then(res =>{
                res.data
            })
        }} className="mt-5 font-bold w-full">Submit</Button>
      </div>
    </div>
  );
};

export default page;

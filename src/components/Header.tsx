"use client";
import Image from "next/image";
// import logo from "./../../public/cross.png"
import Toggle from "./Toggle";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hamberger from "./Hamberger";
import { Input } from "@/components/ui/input";
import Search from "./../../public/search.png";
import logo from "./../../public/letter-n.png";
import {  redirect, useRouter } from 'next/navigation'
import SelectDemo from "./SelectDemo";
import usericon from "./../../public/user1.png"; 
import { signIn, signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { findedAcc, userD, userdetail } from "@/store/atom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const session = useSession();
  console.log(session);
  const router = useRouter()
  const [find, setfind]= useState("")
  const [userDe, setuserDe] = useRecoilState<any>(userD);
  const [userDetail, setuserdetail] = useRecoilState<any>(userdetail);
  const [acc, setacc]= useRecoilState(findedAcc)
  async function data() {
    const res: any = await axios.post(`http://localhost:3000/api/users/hasdj`, {
      email: session.data?.user?.email,
      authenticate: session.status == "authenticated" ? true : false,
    });
    return Promise.all([res])
    
  }
  useEffect(() => {
    data().then((data:any)=>{
      try {
        console.log(data[0].data.data.User)
        setuserDe(data[0].data.data.User);
        setuserdetail(data[0].data.data.userdetail[0]);  
      } catch (error) {
        
      }
    })
  }, []);
  return (
    <div className="bg-red-800 fixed top-0 w-[100vw] z-50 flex shadow-lg justify-between px-10 py-3 border-b border-red-600">
      <div className="flex gap-10">
        <div className="flex gap-2 text-white items-center">
          <div className="2xl:hidden">
            <Hamberger></Hamberger>
          </div>
          <Link
            className="flex sm:ml-5 2xl:ml-0 ml-1 gap-3 items-center"
            href="/"
          >
            <Image className="w-6 h-6" src={logo} alt=""></Image>
            <h3 className="font-semibold lg:block hidden text-lg">
              Narrative Nexus
            </h3>
          </Link>
        </div>
      </div>
      <div className="relative">
      <div className="flex items-center bg-zinc-800 px-4 sm:px-5 rounded-full">
        <Image className="w-4 h-4" src={Search} alt=""></Image>
        <Input
          type="search"
          onChange={(e: any) => {
            setfind(e.target.value);
            axios.post("http://localhost:3000/api/find", {
              username: e.target.value
            }).then((res)=>{
              setacc(res.data)
            })
          }}
          onSubmit={()=>{
            
          }}
          className="bg-transparent w-[30vw] placeholder:font-semibold font-bold placeholder:text-zinc-300 text-white border-transparent focus:border-transparent "
          placeholder="Search Narrative"
        />
      </div>
      <div className="absolute bg-zinc-900 w-full mt-1 p-5 rounded-md border-zinc-500 border-2">
      {acc.map((c:any, t)=>{
        return <div><div className="flex mt-3 items-center gap-5">
        {/* <Avatar className="w-14 h-14">
          <AvatarImage src={c.profilePhoto} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
        <div className="text-xs ">
          <div className="text-sm font-semibold">@{c.username}</div>
          {/* <div>{c.followers} Followers</div> */}
        </div>
      </div></div>
      })}
      </div>
      </div>
      <div className="flex items-center gap-1 sm:gap-5">
        {session.status == "unauthenticated" ? (
          <div className="flex items-center gap-1 sm:gap-5">
            <Link href="/signUp">
              <Button className="h-9 hidden sm:block bg-transparent hover:bg-red-600 text-white">
                SignUp
              </Button>
            </Link>
            <Link href="/api/auth/signin">
              <Button
                onClick={() => {
                  signIn();
                }}
                className="h-9 bg-black hidden sm:block hover:bg-zinc-900 text-white"
              >
                Login
              </Button>
            </Link>
          </div>
        ) : null}
        {session.status == "authenticated" ? (
          <div className="flex items-center gap-1 sm:gap-5">
          <Button
            onClick={() => {
              router.push('/')
              signOut();
            }}
            className="h-9 bg-black hidden sm:block hover:bg-zinc-900 text-white"
          >
            Logout
          </Button>
          <Avatar onClick={()=>{
            router.push('/profile')
          }} className="p-[1.5px] hover:cursor-pointer bg-white w-10 h-10">
            <Image src={usericon} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </div>
        ) : null}

        <div className="sm:hidden ">
          <SelectDemo></SelectDemo>
        </div>
        <div className="hidden sm:block">
          <Toggle></Toggle>
        </div>
      </div>
    </div>
  );
}

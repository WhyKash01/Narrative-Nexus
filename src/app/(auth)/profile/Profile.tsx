"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import usericon from "./../../../../public/user1.png"
import { Button } from '@/components/ui/button'
import Post from './Post'
import {useSession } from "next-auth/react";
import axios from 'axios'
import { useRecoilState } from 'recoil'
import {userdetail,userD} from "./../../../store/atom"
import Link from 'next/link'
import { url } from 'inspector'
import { Avatar } from '@/components/ui/avatar'
import {  AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
const Profile = () => {
    const session = useSession();
    
    const [userDe, setuserDe]=useRecoilState<any>(userD)
    const [userDetail, setuserdetail]=useRecoilState<any>(userdetail)
    useEffect(() => {
      
          axios.post(`http://localhost:3000/api/users/hasdj`, {
          email: session.data?.user?.email,
          authenticate: (session.status == "authenticated")?true:false
          }).then(res=>{
            
            setuserDe(res.data.data.User)
            setuserdetail(res.data.data.userdetail[0])
          })
      
    }, [])
    const abc= "url(\""+userDetail.coverPhoto+"\")";
   
  return (
    <div className='mt-[10vh] ml-[25vw] mr-10'>
            <div className='border relative bg px-10 py-5 gap-10 rounded-md overflow-hidden flex items-center'>
            <div className='top-0 left-0 right-0 h-[20vh] rounded-md absolute overflow-hidden -z-10'>
            <Image className="w-full relative -top-48" src={userDetail.coverPhoto} width={10000} height={10000} alt="@shadcn" />
            </div>
            <div className='w-[20vw]'>
            <Avatar className="w-[200px] h-[200px]">
            <AvatarImage src={userDetail.profilePhoto} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
            {/* <Image className="p-[1.5px] w-[200px] h-[200px] rounded-full hover:cursor-pointer bg-white " src={userDetail.profilePhoto} width={800} height={800} alt="@shadcn" /> */}
            </div>    
            <div className='w-[40vw] mt-[20vh]'>
                <div className='flex gap-5 items-center'>
                <div className=' text-xl font-semibold capitalize'>{userDe.name}
                </div>
                <h2 className='text-xl font-semibold'>@{userDe.username}</h2>
                <Link className='bg-red-700 px-2 py-1 capitalize text-black font-semibold border-zinc-800 border-2 rounded-md' href={"/EditProfile"}>edit profile</Link>
                </div>
                <div className='flex mt-2 capitalize gap-5'>
                    <div>0 post</div>
                    <div>{userDetail.followers} followers</div>
                    <div>{userDetail.following} following</div>
                </div>
                <div className=' mt-2'>{userDetail.bio?userDetail.bio:"Bio"}</div>
            </div>
            </div>
            <Post></Post>
        </div>
  )
}

export default Profile
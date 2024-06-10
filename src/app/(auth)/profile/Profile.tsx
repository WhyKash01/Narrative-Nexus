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
    
  return (
    <div className='mt-[10vh] ml-[25vw] mr-10'>
            <div className='border relative bg px-10 py-5 gap-10 rounded-md overflow-hidden flex items-center'>
            <div className='top-0 left-0 right-0 h-[20vh] absolute overflow-hidden -z-10'>
            <Image className=' w-full h-full relative' src={userDetail.coverPhoto} width={2000} height={1000} alt="@shadcn"></Image>
            </div>
            <div className='w-[20vw] '>
            <Image className="p-[1.5px] w-[200px] h-[200px] rounded-full hover:cursor-pointer bg-white " src={userDetail.profilePhoto} width={800} height={800} alt="@shadcn" />
            </div>    
            <div className='w-[40vw] mt-[20vh]'>
                <div className='flex gap-5 items-center'>
                <div className=' text-xl font-semibold capitalize'>{userDe.name}
                </div>
                <h2 className='text-xl font-semibold'>@{userDe.username}</h2>
                <Link className='bg-red-700 px-2 py-1 capitalize text-black font-semibold border-zinc-800 border-2 rounded-md' href={"/EditProfile"}>edit profile</Link>
                </div>
                <div className='flex mt-2 gap-5'>
                    <div>0 post</div>
                    <div>{userDetail.followers} followers</div>
                    <div>{userDetail.following} following</div>
                </div>
                <div className=' mt-2'>{userDetail.bio}</div>
            </div>
            </div>
            <Post></Post>
        </div>
  )
}

export default Profile
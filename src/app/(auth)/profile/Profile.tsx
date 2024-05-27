"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import usericon from "./../../../../public/user1.png"
import { Button } from '@/components/ui/button'
import Post from './Post'
import {useSession } from "next-auth/react";
import axios from 'axios'
import { useRecoilState } from 'recoil'
import {userdetail} from "./../../../store/atom"

const Profile = () => {
    const session = useSession();
    
    
    const [userDetail, setuserdetail]=useRecoilState<any>(userdetail)
    useEffect(() => {
      
          axios.post(`http://localhost:3000/api/users/hasdj`, {
          email: session.data?.user?.email,
          authenticate: (session.status == "authenticated")?true:false
          }).then(res=>{
            console.log(res.data.userdetail)
            
            setuserdetail(res.data.userdetail[0])
          })
      
    }, [])
    
  return (
    <div className='mt-[10vh] ml-[25vw]'>
            <div className='border bg px-10 py-5 rounded-md flex items-center'>
            <div className='w-[20vw] '>
            <Image className="p-[1.5px] rounded-full hover:cursor-pointer bg-white " src={usericon} alt="@shadcn" />
            </div>    
            <div className='w-[40vw]'>
                <div className='flex gap-5 items-center'>
                <h2 className='text-xl font-semibold'>{session.data?.user?.name}</h2>
                <Button>edit profile</Button>
                </div>
                <div className='flex mt-2 gap-5'>
                    <div>0 post</div>
                    <div>{userDetail.followers} followers</div>
                    <div>{userDetail.following} following</div>
                </div>
                <div className='mt-2'>{session.data?.user?.name}
                </div>
                <div className=' mt-2'>{userDetail.bio} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis laudantium perferendis velit molestiae, dignissimos, aliquam perspiciatis eum, itaque omnis doloribus qui vitae? Vitae aperiam harum eum sint cumque enim atque molestias sit perferendis? Minus nemo odit cupiditate provident, nulla minima accusamus similique magnam inventore sequi ipsam, reiciendis, necessitatibus iste amet?
                </div>
            </div>
            </div>
            <Post></Post>
        </div>
  )
}

export default Profile
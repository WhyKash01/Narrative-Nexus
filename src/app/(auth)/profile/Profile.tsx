"use client"
import React from 'react'
import Image from 'next/image'
import usericon from "./../../../../public/user1.png"
import { Button } from '@/components/ui/button'
import Post from './Post'
import {useSession } from "next-auth/react";

const Profile = () => {
    const session = useSession();
  return (
    <div className='mt-[10vh] ml-[25vw]'>
            <div className='border px-10 py-5 rounded-md flex items-center gap-20 m-10'>
            <div className='w-[30vw] '>
            <Image className="p-[1.5px] rounded-full hover:cursor-pointer bg-white " src={usericon} alt="@shadcn" />
            </div>    
            <div>
                <div className='flex gap-5 items-center'>
                <h2 className='text-xl font-semibold'>{session.data?.user?.name}</h2>
                <Button>edit profile</Button>
                </div>
                <div className='flex mt-2 gap-5'>
                    <div>0 post</div>
                    <div>0 followers</div>
                    <div>0 following</div>
                </div>
                <div className='mt-2'>{session.data?.user?.name}
                {JSON.stringify(session)}</div>
                <div className=' mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et explicabo eius deserunt doloribus corporis, veritatis iure laudantium, nisi asperiores quas nam, autem minima quaerat id dolores. Fuga explicabo suscipit modi, culpa accusantium unde, repellat placeat nesciunt maiores est ea iste eius delectus eligendi! Amet fugiat aut veniam blanditiis eaque doloremque.</div>
            </div>
            </div>

            <Post></Post>
        </div>
  )
}

export default Profile
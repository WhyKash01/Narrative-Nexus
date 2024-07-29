"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import usericon from "./../../../../public/user1.png";
import { Button } from "@/components/ui/button";
import Post from "./Post";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userdetail, userD, posts, SeruserD, Seruserdetail } from "../../../store/atom";
import Link from "next/link";
import { url } from "inspector";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useSearchParams } from 'next/navigation';

export async function wait(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default async function Profile() {
  const session: any = useSession();
  const [post, setPost] = useRecoilState<any>(posts);
  const [userDe, setuserDe] = useRecoilState<any>(SeruserD);
  const [userDetail, setuserdetail] = useRecoilState<any>(Seruserdetail);
  const searchParams = useSearchParams();
  const username = searchParams.get('username');
  async function data() {
    const res: any = await axios.get(`http://localhost:3000/api/users/hasdj?username=${username}`);

    
    console.log(session.data?.user.id);
    return Promise.all([res]);
  }
  useEffect(() => {
    data().then((data: any) => {
      try {
        console.log(data);
        setuserDe(data[0].data.data.user);
        setuserdetail(data[0].data.data.userDetails[0]);
        setPost(data[0].data.data.posts.reverse());
      } catch (error) {}
    });
  }, []);

  const abc = 'url("' + userDetail.coverPhoto + '")';
  return (
    <div className="2xl:mt-[10vh] mt-[12vh] sm:w-[65vw] w-[90vw]  2xl:w-[50vw] xl:ml-[5vw] 2xl:ml-[25vw] mx-[5vw]">
      <div className="border relative bg sm:px-10 px-5 py-5 gap-10 rounded-md overflow-hidden flex items-center">
        <div className="top-0 left-0 right-0 h-[20vh]  rounded-md absolute overflow-hidden -z-10">
          <Image
            className="max-w-full max-h-[20vh] relative "
            src={userDetail.coverPhoto}
            width={10000}
            height={10000}
            alt="@shadcn"
          />
        </div>
        <div className="sm:w-[20vw] w-[20vw] ">
          <Avatar className="sm:w-[200px] w-[100px] h-[100px] sm:h-[200px]">
            <AvatarImage src={userDetail.profilePhoto} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-[40vw] mt-[20vh]">
          <div className="flex gap-5 items-center">
            <div className=" text-xl font-semibold capitalize">
              {userDe.name}
            </div>
            <h2 className="text-xl font-semibold">@{userDe.username}</h2>
            
          </div>
          <div className="flex mt-2 capitalize gap-5">
            <div>0 post</div>
            <div>{userDetail.followers} followers</div>
            <div>{userDetail.following} following</div>
          </div>
          <div className="sm:relative hidden mt-2">{userDetail.bio ? userDetail.bio : "Bio"}</div>
        </div>
        
      </div>
      <Post></Post>
    </div>
  );
}

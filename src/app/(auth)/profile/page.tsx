import React from 'react'
import { Avatar } from "@/components/ui/avatar";

import Header from "./../../../components/Header"
import LeftPart from '@/components/LeftPart'
import usericon from "./../../../../public/user1.png"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Profile from './Profile';

const page = () => {
  return (
    <div>
        <Header></Header>
        <div className="flex relative ">
        <div className="hidden 2xl:block">
        <LeftPart></LeftPart>
        </div>
        <Profile></Profile>
      </div>
    </div>
    
  )
}

export default page
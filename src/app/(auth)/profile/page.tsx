import React, { Suspense } from 'react'
import { Avatar } from "@/components/ui/avatar";

import Header from "./../../../components/Header"
import LeftPart from '@/components/LeftPart'
import usericon from "./../../../../public/user1.png"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Profile, { wait } from './Profile';
import Loading from './loading';
// async function Render() {
//   new Promise (resolve=> setTimeout(resolve, 2000))
//   return(
//     <Profile></Profile>
//   )
// }
const page =() => {
  return (
    <div>
        <Header></Header>
        <div className="flex relative ">
        <div className="hidden 2xl:block">
        <LeftPart></LeftPart>
        </div>
        <Suspense fallback={<Loading></Loading>}>
        <Profile></Profile>
        </Suspense>
      </div>
    </div>
    
  )
}

export default page
import React, { useEffect } from "react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { useRecoilState } from "recoil";
import axios from "axios";
import { popularAcc } from "@/store/atom";
const PopularAcc = () => {
  const [accounts, setaccounts]= useRecoilState(popularAcc)
  useEffect(() => {
      
    axios.get(`http://localhost:3000/api/users`).then(res=>{
      setaccounts(res.data)
      
    })

}, [])
console.log(accounts)
  return (
    <div className=" mt-[12vh] sm:w-[40vh] w-[100vw] sm:fixed hidden right-5">
      <div className="bg-zinc-800 mr-5 py-5 px-5 rounded-md">
        <div className="font-bold">Popular Narrative</div>
        {accounts.map((c: any,i: any)=>{
          return <div><div className="flex mt-3 items-center gap-5">
          <Avatar className="w-14 h-14">
            <AvatarImage src={c.profilePhoto} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-xs">
            <div className="text-sm font-semibold">@{c.user.username}</div>
            <div>{c.followers} Followers</div>
          </div>
        </div></div>
        })}
        
        <button className="bg-zinc-500 mt-5 font-bold text-sm py-[2px] px-3 text-white hover:bg-zinc-400 rounded-full">
          See more
        </button>
      </div>
    </div>
  );
};

export default PopularAcc;

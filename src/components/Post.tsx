import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Image from "next/image";
import up from "./../../public/uper.png";
import down from "./../../public/downer.png";
import comment from "./../../public/comment.png";
const Post = (props: any) => {
  return (
    <div className="px-5 py-5 border rounded-md">
      <div className="flex justify-between">
        <div className="flex items-center text-sm gap-2">
          <Avatar className="w-7 h-7 text-xs">
            <AvatarImage src="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          Whykash
        </div>
        <Button className="bg-red-700 font-bold text-sm h-6 rounded-full">
          Join
        </Button>
      </div>
      <div className="text-lg mt-2 font-semibold">
        {props.title}
      </div>
      
      <div className="h-[50vh] relative flex items-center justify-center w-full bg-zinc-800 rounded-md mt-2">
      <div className="absolute w-full bottom-0 p-5 rounded-b-md left-0 bg-zinc-900/50 mt-1">
        {props.content}
      </div>
        <Image className="max-h-full h-auto w-auto max-w-full  overflow-hidden" width={1000} height={1000} src={props.image} alt="" ></Image>
        
      </div>
      <div className="flex gap-5 mt-3 items-center">
        <button className="bg-zinc-700 gap-1 flex items-center hover:bg-zinc-700 text-white font-bold h-8  rounded-full">
          <div className="h-8 w-10 justify-center rounded-full items-center hover:bg-red-700 flex">
            <Image
              
              className="h-4 w-5 "
              src={up}
              alt=""
            ></Image>
          </div>
          {props.vote}
          <div className="h-8 w-10 justify-center rounded-full items-center hover:bg-red-700 flex">
            <Image
              className="h-4 w-5 "
              src={down}
              alt=""
            ></Image>
          </div>
        </button>
        <Button className="bg-zinc-700 items-center gap-1 text-white font-bold text-sm h-8 rounded-full">
          <Image className="h-4 w-4 mr-1 relative top-[2px]" src={comment} alt=""></Image>
          175
        </Button>
      </div>
    </div>
  );
};

export default Post;

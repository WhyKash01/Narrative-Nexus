import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Image from "next/image";
import up from "./../../public/uper.png";
import down from "./../../public/downer.png";
import comment from "./../../public/comment.png";
const Post = () => {
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
        Mumbai Metro Line 1 is shut down completely for PM visit.
      </div>
      <div className="h-[60vh] w-full bg-zinc-800 rounded-md mt-2"></div>
      <div className="flex gap-5 mt-3 items-center">
        <button className="bg-zinc-700 gap-1 flex items-center hover:bg-zinc-700 text-white font-bold h-8  rounded-full">
          <div className="h-8 w-10 justify-center rounded-full items-center hover:bg-red-700 flex">
            <Image
              className="h-4 w-5 "
              src={up}
              alt=""
            ></Image>
          </div>
          1,7k
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

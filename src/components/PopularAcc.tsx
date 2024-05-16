import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
const PopularAcc = () => {
  return (
    <div className=" mt-[12vh] w-[40vh] fixed right-5">
      <div className="bg-zinc-800 mr-5 py-5 px-5 rounded-md">
        <div className="font-bold">Popular Narrative</div>
        <div className="flex mt-3 items-center gap-5">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-xs">
            <div className="text-sm font-semibold">Whykash</div>
            <div>534 member</div>
          </div>
        </div>
        <div className="flex mt-3 items-center gap-5">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-xs">
            <div className="text-sm font-semibold">Whykash</div>
            <div>534 member</div>
          </div>
        </div>
        <div className="flex mt-3 items-center gap-5">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-xs">
            <div className="text-sm font-semibold">Whykash</div>
            <div>534 member</div>
          </div>
        </div>
        <div className="flex mt-3 items-center gap-5">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-xs">
            <div className="text-sm font-semibold">Whykash</div>
            <div>534 member</div>
          </div>
        </div>
        <div className="flex mt-3 items-center gap-5">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-xs">
            <div className="text-sm font-semibold">Whykash</div>
            <div>534 member</div>
          </div>
        </div>
        <button className="bg-zinc-500 mt-5 font-bold text-sm py-[2px] px-3 text-white hover:bg-zinc-400 rounded-full">
          See more
        </button>
      </div>
    </div>
  );
};

export default PopularAcc;

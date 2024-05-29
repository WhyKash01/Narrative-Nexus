import React from "react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea"

const page = () => {
  return (
    <div>
      <Header></Header>
      <div className=" mt-[10vh] mx-10 h-[80vh] rounded-md">
        <div className="flex justify-between gap-10">
          <Input placeholder="Title" className="" type="text" />
          <DropdownMenu>
            <DropdownMenuTrigger className="px-10 rounded-md bg-zinc-700 ">Topic</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <Textarea className="mt-5" placeholder="Content" />

      </div>
    </div>
  );
};

export default page;

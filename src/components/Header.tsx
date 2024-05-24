"use client";
import Image from "next/image";
// import logo from "./../../public/cross.png"
import Toggle from "./Toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hamberger from "./Hamberger";
import { Input } from "@/components/ui/input";
import Search from "./../../public/search.png";
import logo from "./../../public/letter-n.png";
import SelectDemo from "./SelectDemo";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <div className="bg-red-800 fixed top-0 w-[100vw] z-50 flex shadow-lg justify-between px-10 py-3 border-b border-red-600">
      <div className="flex gap-10">
        <div className="flex gap-2 text-white items-center">
          <div className="2xl:hidden">
            <Hamberger></Hamberger>
          </div>
          <Link
            className="flex sm:ml-5 2xl:ml-0 ml-1 gap-3 items-center"
            href="/"
          >
            <Image className="w-6 h-6" src={logo} alt=""></Image>
            <h3 className="font-semibold lg:block hidden text-lg">
              Narrative Nexus
            </h3>
          </Link>
        </div>
      </div>
      <div className="flex items-center bg-zinc-800 px-4 sm:px-5 rounded-full">
        <Image className="w-4 h-4" src={Search} alt=""></Image>
        <Input
          type="search"
          className="bg-transparent w-[30vw] placeholder:font-semibold font-bold placeholder:text-zinc-300 text-white border-transparent focus:border-transparent "
          placeholder="Search Narrative"
        />
      </div>
      <div className="flex items-center gap-1 sm:gap-5">
        {session.status == "unauthenticated" ? (
          <div className="flex items-center gap-1 sm:gap-5">
            <Link href="/signUp">
              <Button className="h-9 hidden sm:block bg-transparent hover:bg-red-600 text-white">
                SignUp
              </Button>
            </Link>
            <Link href="/api/auth/signin">
              <Button
                onClick={() => {
                  signIn();
                }}
                className="h-9 bg-black hidden sm:block hover:bg-zinc-900 text-white"
              >
                Login
              </Button>
            </Link>
          </div>
        ) : null}
        {session.status == "authenticated" ? (
          <div className="flex items-center gap-1 sm:gap-5">
          <Button
            onClick={() => {
              signOut();
            }}
            className="h-9 bg-black hidden sm:block hover:bg-zinc-900 text-white"
          >
            Logout
          </Button>
          </div>
        ) : null}

        <div className="sm:hidden ">
          <SelectDemo></SelectDemo>
        </div>
        <div className="hidden sm:block">
          <Toggle></Toggle>
        </div>
      </div>
    </div>
  );
}

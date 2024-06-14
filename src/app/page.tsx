"use client"
import Image from "next/image";
import {RecoilRoot} from 'recoil';
import Header from './../components/Header'
import LeftPart from "@/components/LeftPart";
import RightPart from "@/components/RightPart";
import PopularAcc from "@/components/PopularAcc";

import { Suspense } from "react";
export default function Home() {
  return (
    <div>
    <RecoilRoot>
    <div className="flex flex-col">
      <Header></Header>
      <div className="flex relative ">
        <div className="hidden 2xl:block">
        <LeftPart></LeftPart>
        </div>
        <Suspense fallback={<h1>loading</h1>}>
        <RightPart></RightPart>
        </Suspense>
        <PopularAcc></PopularAcc>
      </div>
    </div>
    </RecoilRoot>
    </div>
  );
}

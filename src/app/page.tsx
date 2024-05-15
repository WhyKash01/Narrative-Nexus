"use client"
import Image from "next/image";
import {RecoilRoot} from 'recoil';
import Header from './../components/Header'
import LeftPart from "@/components/LeftPart";
import RightPart from "@/components/RightPart";
export default function Home() {
  return (
    <div>
    <RecoilRoot>
    <div className="flex flex-col">
      <Header></Header>
      <div className="flex relative gap-5">
        <LeftPart></LeftPart>
        <RightPart></RightPart>
      </div>
    </div>
    </RecoilRoot>
    </div>
  );
}

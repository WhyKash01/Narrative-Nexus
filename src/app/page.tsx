"use client"
import Image from "next/image";
import {RecoilRoot} from 'recoil';
import Header from './../components/Header'
export default function Home() {
  return (
    <div>
    <RecoilRoot>
    <div className="">
      <Header></Header>
      
    </div>
    </RecoilRoot>
    </div>
  );
}

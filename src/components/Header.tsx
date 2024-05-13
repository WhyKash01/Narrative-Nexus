import Image from "next/image";
import logo from "./../../public/cross.png"
import Link  from "next/link";
import {textSize} from "./../store/atom"
import { useRecoilState } from "recoil";
export default function Home() {
  const [x, setx]= useRecoilState(textSize);
  return (
    
    <div className="bg-cyan-900 z-50 flex shadow-lg justify-between px-5 py-3 border-b border-cyan-600">
      {x}
    </div>
  );
}
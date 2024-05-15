import * as React from "react"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import home from "./../../public/home.png"
import popular from "./../../public/fire.png"
import Accordion from "./Accordion"
export default function LeftPart() {
  return (
    <div className="fixed top-[0vh] bottom-0 left-0">

    <ScrollArea className="h-[91.8vh] mt-[8vh] w-[20vw] rounded-md border">
      <div className="p-5 flex flex-col gap-2">
        <div className="bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
          <Image src={home} className="w-5 h-5" alt=""></Image> Home</div>
          <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
          <Image src={popular} className="w-5 h-5" alt=""></Image> Popular</div>
          <Separator></Separator>
          <Accordion></Accordion>
      </div>
    </ScrollArea>
        </div>
  )
}

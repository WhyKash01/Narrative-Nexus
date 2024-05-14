import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import dots from "./../../public/dots.png"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Toggle from "./Toggle"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="bg-transparent px-0">
        <Image  src={dots} className="w-6 h-6" alt=""></Image>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="px-0 ">
          <SelectLabel><div className="flex justify-center"><Toggle></Toggle></div></SelectLabel>
          <SelectLabel>
            <Link href="/login">
                <Button className="h-9 w-full bg-cyan-950 hover:bg-zinc-900 text-white">
                    Login
                </Button>
            </Link> 
          </SelectLabel>
          <SelectLabel>
            <Link href="/login">
                <Button className="h-9 w-full bg-cyan-950 hover:bg-zinc-900 text-white">
                    Sign Up
                </Button>
            </Link> 
          </SelectLabel>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

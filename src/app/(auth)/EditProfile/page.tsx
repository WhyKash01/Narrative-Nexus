import React from 'react'
import Header from "@/components/Header"
import LeftPart from "@/components/LeftPart"
import EditProfile from './EditProfile'

const page = () => {
  return (
    <div>
        <Header></Header>
        <div className="flex relative ">
        <div className="hidden 2xl:block">
        <LeftPart></LeftPart>
        </div>
        <EditProfile></EditProfile>
      </div>
    </div>
  )
}

export default page
import React from 'react'
import Posts from '@/components/Post'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const Post = () => {
  return (
    <div className='border-t'>
            <div className='flex gap-5 items-center text-xl mt-5 font-bold  '>Post
            <Link href="/CreatePost">Create Post</Link></div>
        <div className='grid mt-5  gap-2 grid-cols-2'>
            <Posts></Posts>
            <Posts></Posts>
            <Posts></Posts>
            <Posts></Posts>
            <Posts></Posts>
            <Posts></Posts>
        </div>
    </div>
  )
}

export default Post
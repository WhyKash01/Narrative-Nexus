import React, { useEffect } from 'react'
import Posts from '@/components/Post'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { userdetail, posts } from '@/store/atom'
import { useRecoilState } from 'recoil'
import ShowPost from "./ShowPost"
const Post = () => {
  const [post, setPost]=useRecoilState<any>(posts)
  return (
    <div className='border-t'>
            <div className='flex gap-5 items-center text-xl mt-5 font-bold  '>Post
            </div>
        <div className='grid my-5  gap-2 grid-cols-2'>
            
            {post.map((c: any,t: any)=>{
              return <ShowPost image={c.thumbnail} id={c.id} username={c.Uname} proPhoto={c.Prophoto} topic={c.topic} content={c.content} title={c.title} vote={c.vote} ></ShowPost>
            })}
            
        </div>
    </div>
  )
}

export default Post
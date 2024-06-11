import React, { useEffect } from 'react'
import Posts from '@/components/Post'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { userdetail, posts } from '@/store/atom'
import { useRecoilState } from 'recoil'
const Post = () => {
  const [post, setPost]=useRecoilState<any>(posts)
  const [userDetail, setuserdetail]=useRecoilState<any>(userdetail)
  const session = useSession();
  useEffect(() => {
    
    axios.post(`http://localhost:3000/api/blog/blogDetail`, {
    id: userDetail.id
    }).then(res=>{
      setPost(res.data)
      console.log(res.data)
      
    })

}, [])
  return (
    <div className='border-t'>
            <div className='flex gap-5 items-center text-xl mt-5 font-bold  '>Post
            <Link className='bg-red-700 px-2 text-sm  py-1 capitalize text-black font-bold border-zinc-800 border-2 rounded-md' href="/CreatePost">Create Post</Link></div>
        <div className='grid mt-5  gap-2 grid-cols-2'>
            
            {post.map((c: any,t: any)=>{
              return <Posts image={c.thumbnail} username={c.Uname} proPhoto={c.Prophoto} topic={c.topic} content={c.content} title={c.title} vote={c.vote} ></Posts>
            })}
            
        </div>
    </div>
  )
}

export default Post
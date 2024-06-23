import React, { useEffect } from 'react'
import Posts from "./Post"
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { AllPost } from '@/store/atom'
import { useSession } from 'next-auth/react'
const Content = () => {
  const session: any = useSession();
  const [posts, setPost]= useRecoilState(AllPost)
  useEffect(() => {
      
    axios.get(`http://localhost:3000/api/blog`).then(res=>{
      setPost(res.data.reverse())
    })
}, [])
  return (
    <div className='ml-[5vw] mr-[3vh] gap-2 flex flex-col my-[2vh]'>
        {
        posts.map((c : any,i :any)=>{
          return <Posts image={c.thumbnail} initialDownvotes={c.downvotes} initialUpvotes={c.upvotes} postId={c.id} userId={Number(session.data?.user.id)} username={c.Uname} proPhoto={c.Prophoto} topic={c.topic} content={c.content} title={c.title} vote={c.vote} ></Posts>
            
        })}
        
    </div>
  )
}

export default Content
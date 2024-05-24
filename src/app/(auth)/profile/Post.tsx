import React from 'react'
import Posts from '@/components/Post'
const Post = () => {
  return (
    <div className='border-t mr-10'>
            <div className='text-center text-xl mt-5 font-bold  '>Post</div>
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
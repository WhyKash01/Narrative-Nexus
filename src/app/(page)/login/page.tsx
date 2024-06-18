import React from 'react'
import Header from '../../../components/Header'
import Login from '../compo/Login'
export default function page() {
  return (
    <div className='bg-slate-200 dark:bg-inherit w-[100vw] h-[100vh]'>
      <Header></Header>
      <div className='2xl:pt-40 pt-40 flex justify-center items-center'>
      <div className='w-[50vw] flex justify-center dark:bg-zinc-900 rounded-lg border border-red-900 bg-white '>
        <Login></Login>
      </div>
      </div>
    </div>
  )
}

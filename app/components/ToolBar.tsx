"use client";

import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { BsSearch, BsMicFill, BsYoutube, BsBell, BsFillCameraFill } from 'react-icons/bs'
import Image from 'next/image'


function ToolBar() {
    const [search, setSearch] = useState("");
  return (
    <div className='flex justify-between p-1'>
        <div className="flex items-center gap-1">
            <HiMenu size={30} color="white"/>
            <div className='flex items-center'>
                <BsYoutube size={35} className='text-red-600'/>
                <span className='text-white font-bold text-[29px]'>Youtube</span>
            </div>
        </div>
        <div className="hidden md:flex min-w-[300px] gap-2 lg:w-[600px]">
            <div className='flex w-full'>
                <input type="text" 
                    placeholder='Search...'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)} 
                    className='w-full px-4 border-[1px] border-zinc-700 placeholder:text-zinc-500 focus:bg-black focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-tl-full rounded-bl-full bg-transparent' />
                <div className='bg-zinc-700 px-5 py-2 rounded-tr-full rounded-br-full'>
                    <BsSearch size={28}/>
                </div>
            </div>
            <div className='flex items-center bg-zinc-800 py-2 px-4 rounded-full hover:bg-zinc-500 cursor-pointer'>
                <BsMicFill />
            </div>
        </div>
        <div className="flex items-center gap-3">
            <div className='flex items-center bg-transparent px-4 py-3 rounded-full hover:bg-zinc-500 cursor-pointer'>
                <BsFillCameraFill size={17}/>
            </div>
            <div className='flex items-center bg-transparent px-4 py-3 rounded-full hover:bg-zinc-500 cursor-pointer'>
                <BsBell size={17}/>
            </div>
            <div>
                <Image src='https://pbs.twimg.com/profile_images/1663819132234784770/2A7NJSJg_400x400.jpg' 
                height={30} 
                width={30}
                alt='user image'
                className='rounded-full content-center'
                />
            </div>
        </div>
    </div> 
  )
}

export default ToolBar

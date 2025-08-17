'use client'
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const CVBuilder = () => {
    const route = useRouter();
  return (
    <div className='w-full space-y-4'>
      <div className='flex justify-center items-center p-8 relative'>
        <button className='absolute left-1 top-1 p-2 rounded-full bg-[#f7f7f7] border-2
         border-[#dfdfdf] text-center
         cursor-pointer'
         onClick={()=>route.back()}>
            <FaArrowLeftLong size={24}/>
        </button>
        <div className='text-center space-y-1'>
            <h1 className='text-4xl font-bold text-black'>Choose a template for your CV</h1>
            <p className='text-[16px] text-[#333333] font-medium'>Pick a layout that best reflects your professional profile.</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default CVBuilder

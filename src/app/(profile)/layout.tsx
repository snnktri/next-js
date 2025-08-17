import Sidebar from '@/component/profile/Sidebar'
import React from 'react'

const ProfileLayout = ({children}: {
  children: React.ReactNode
}) => {
  return (
    <div className='flex bg-white gap-x-6'>
      <aside className='w-[190px] h-fit'>
        <Sidebar />
      </aside>
      <main className='w-full flex justify-start'>
        {children}
      </main>
    </div>
  )
}

export default ProfileLayout

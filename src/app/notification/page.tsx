import NotificationCard from '@/component/notification/NotificationCard'
import React from 'react'
import { mockNotifications } from '@/data/notificationMockData'

const Notification = () => {
  return (
    <div className='w-full md:max-w-4xl flex flex-col items-center mx-auto gap-y-6'>
      <div className='border-1 border-[#dfdfdf] w-full px-2 py-4 rounded-lg font-medium'>
        <p className='text-xl px-3'>Notifications</p>
      </div>
      <div className='space-y-2 w-full'>
        {
          mockNotifications.map((data, index) => (
            <NotificationCard data={data} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Notification

import { PersonPartial } from '@/type/resources/person.type';
import React from 'react'
import AvatarCard from './AvatarCard';
interface Props {
    title?: string;
    data?: PersonPartial[]
}

const PeopleCard: React.FC<Props> = ({title, data}) => {
  return (
    <div className='px-2 space-y-2'>
      <div className="flex justify-between text-[16px] font-medium mb-2">
        <p className='text-base font-medium'>{title}</p>
      </div>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {
            data?.map((person, index) => (
                <AvatarCard key={index} person={person} />
            ))
        }
      </div>
       <div className="flex items-center text-gray-700 justify-end">
        {/* Prev button */}
        <button className="pl-2 py-1 rounded hover:bg-gray-200">&lt;</button>

        {/* Page numbers */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
          <button
            key={page}
            className={`p-2 py-1 rounded ${
              page === 1 ? "bg-blue-600 text-white" : "hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        <span className="p-2">....</span>

        {/* Next button */}
        <button className="p-2 py-1 rounded hover:bg-gray-200">&gt;</button>
      </div>
    </div>
  )
}

export default PeopleCard

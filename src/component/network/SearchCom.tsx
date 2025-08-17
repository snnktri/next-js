import React from 'react';
import { CiSearch } from "react-icons/ci";

interface Props {
  searchValue: string;
  setSearchValue: (val: string) => void;
}

const SearchCom: React.FC<Props> = ({ searchValue, setSearchValue }) => {
  return (
    <div className='flex justify-between items-center py-[10px] px-4 border border-[#dfdfdf] rounded-[9px]'>
      <input
        type="text"
        className='text-[16px] placeholder:text-[#999999] px-2 w-full focus:outline-none'
        placeholder='Search people, schools or colleges...'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className='text-[#999999] text-lg cursor-pointer'>
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchCom;

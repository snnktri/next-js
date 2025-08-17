import React from "react";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";

const LeftBar = () => {
  return (
    <>
      <div className="relative">
        {/* bookmarks card */}
        <button className="absolute right-2 px-1 cursor-pointer group">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform transition-transform duration-300 origin-top group-hover:scale-y-130"
          >
            <path
              className="fill-white stroke-black group-hover:fill-black transition-colors duration-300"
              d="M13 1H3C2.46957 1 1.96086 1.14335 1.58579 1.39852C1.21071 1.65369 1 1.99977 1 2.36063V12.6593C1.00003 12.7188 1.02305 12.7774 1.06676 12.829C1.11047 12.8806 1.17334 12.9235 1.24907 12.9534C1.32481 12.9833 1.41075 12.9991 1.49831 12.9993C1.58587 12.9995 1.67197 12.9841 1.748 12.9545L7.008 10.9102C7.31013 10.7928 7.65205 10.731 8 10.731C8.34794 10.731 8.68987 10.7928 8.992 10.9102L14.252 12.9552C14.3281 12.9848 14.4143 13.0002 14.5019 13C14.5896 12.9998 14.6756 12.9839 14.7514 12.9539C14.8271 12.9239 14.89 12.8809 14.9336 12.8292C14.9773 12.7775 15.0001 12.7189 15 12.6593V2.36063C15 1.99977 14.7893 1.65369 14.4142 1.39852C14.0391 1.14335 13.5304 1 13 1Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* card */}
        <div
          className="w-full p-4 border-[1.5px] border-[#dfdfdf]
              flex flex-col items-start rounded-xl"
        >
          <div className="flex w-full items-center justify-start">
            {/* image section */}
            <div className="p-1">
              <Image
                src="/job/school1.png"
                alt="school.png"
                height={64}
                width={64}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-1">
                {/* title */}
                <h3 className="text-[14px] text-[#1f1f1f]">
                  English Language Teacher (Grade 9-10)
                </h3>
                {/* name and locaiton */}
                <p className="text-gray-500 text-sm flex items-center">
                  <span>Mount Horizon School</span>
                  <span className="mx-1 h-1 w-1 rounded-full bg-gray-500 self-center"></span>
                  <span>Kathmandu, Nepal</span>
                </p>
              </div>
              {/* times and deadline */}
              <div className="flex gap-2 text-[12px]">
                <p className="text-[#23b081]">5 hours ago</p>
                <p className="text-[#555555]">
                  Application Deadline: 6 days from today
                </p>
              </div>
            </div>
          </div>
          <div
            className=""
            style={{ marginLeft: "4rem", width: "calc(100% - 4rem)" }}
          >
            <div className="flex justify-between items-center">
              <button
                className="cursor-pointer text-[#0070ef] bg-[#d9ebff]
                    flex items-center justify-center px-2 py-1 rounded-xl gap-1
                    text-[12px]"
              >
                <AiFillThunderbolt /> <span>Easy Apply</span>
              </button>
              <p className="text-[12px] text-[#1f1f1f] flex items-center gap-1 justify-center">
                <MdOutlineWorkOutline /> <span>Applicants</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBar;

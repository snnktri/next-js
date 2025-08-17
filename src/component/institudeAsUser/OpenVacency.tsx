'use client';
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";

const OpenVacency = () => {
  return (
    <div
      className="bg-[#ffffff] py-4 px-6 rounded-2xl
    shadow-md shadow-gray-300 space-y-2 w-90"
    >
      <div className="space-y-1">
        <h2 className="flex justify-between gap-y-1
         text-black font-medium text-[16px] items-center
        ">
            <span>Physics Teacher (Grade 11-12)</span>
            <BsThreeDotsVertical className="cursor-pointer"
            onClick={() => alert("Three dot click")}/>

        </h2>
        <p className="text-[#777777] text-sm font-medium">United Academy</p>
        <p className="text-[#777777] text-sm font-medium">Jawlakhel, Lalitpur</p>
        <p className="flex gap-1 items-center mt-1 text-base">
            <CiClock2 /> <span className="text-red-400">Open until filled</span>
        </p>
      </div>
      <div className="
      flex justify-end items-center mt-2 gap-2">
        <button className="bg-gray-200 px-2 py-2 rounded-md hover:bg-gray-300 text-black transition-colors
        cursor-pointer"
        onClick={() => alert("navigate to edit text")}>Edit Job</button>
        <button className="bg-blue-500 px-2 py-2 rounded-md hover:bg-blue-600 text-white transition-colors
        cursor-pointer"
        onClick={() => alert("delete vacency")}>Close Vacency</button>
      </div>
    </div>
  );
};

export default OpenVacency;

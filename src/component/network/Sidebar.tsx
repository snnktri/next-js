"use client";

import Link from "next/link";
import React from "react";
import { MdOutlineHandshake } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className={`py-[10px] border-1 border-[#dfdfdf] rounded-lg`}>
        <button className="text-[16px] pl-5 font-bold cursor-pointer">
          Network Management
        </button>
      </div>
      <div className="border-1 border-[#dfdfdf] rounded-lg">
        <Link
          href="/network/my-connections"
          className={`text-[16px] py-[10px] pl-5 font-light text-[#777777] ${
            pathname === "/network/my-connections" ? "bg-[#f7f7f7]" : ""
          } cursor-pointer
          flex gap-2 items-center`}
        >
          <MdOutlineHandshake /> <span>My Connections</span>
        </Link>
        <hr className="border-t-1 border-1 border-[#dfdfdf]" />
        <Link
          href="/network/my-posts"
          className={`text-[16px] py-[10px] pl-5 font-light text-[#777777] ${
            pathname === "/network/my-posts" ? "bg-[#f7f7f7]" : ""
          } cursor-pointer
         flex gap-2 items-center`}
        >
          <MdPostAdd /> <span>My Posts</span>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;

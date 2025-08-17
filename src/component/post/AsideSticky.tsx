"use client";

import React, { useState } from "react";
import Image from "next/image";
import CreatePost from "./CreatePost";

const AsideSticky = () => {
  const [isCreatePostVisible, setIsCreatePostVisible] =
    useState<boolean>(false);

  const handleOpenCreatePost = () => {
    setIsCreatePostVisible(true);
  };
  return (
    <div className="">
      <aside
        className="hidden md:sticky md:top-24 z-50 w-[330px] h-[174px] p-2 md:flex flex-col justify-around
  items-center bg-[#F9FAFB] border border-[#DFDFDF] rounded-sm"
      >
        <div className="flex px-2 py-2 items-center gap-2 bg-[#F2F4F5] border border-[#DFDFDF] rounded-md">
          <Image
            src="/assets/profile.png"
            alt="profile"
            height={48}
            width={48}
            className="object-cover w-12 h-12 rounded-full"
          />

          <input
            type="text"
            className="w-full px-2 font-main font-medium py-2 rounded-sm outline-none focus:ring focus:ring-blue-300 placeholder-black
            text-[14px] bg-transparent"
            placeholder="Write something..."
          />
        </div>

        <button
          className="w-full rounded-2xl bg-[#D9EBFF] text-[#0070EF] p-2.5 text-[18px] cursor-pointer"
          onClick={handleOpenCreatePost}
        >
          <span className="text-2xl font-bold">+ </span> Create Post
        </button>
      </aside>
      {isCreatePostVisible && (
        <CreatePost onClick={() => setIsCreatePostVisible(false)} />
      )}
    </div>
  );
};

export default AsideSticky;

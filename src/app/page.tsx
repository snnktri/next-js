
import Post from "@/component/post/Post";
import Image from "next/image";
import React from "react";
import { posts} from "@/data/postMockData"
import AsideSticky from "@/component/post/AsideSticky";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-white gap-x-4">
      {/* side card */}
      <AsideSticky />
      {/* main content of post */}
     <main className="flex flex-col gap-4 w-full">
        <div className="w-full border border-[#DFDFDF] p-4 sm:p-5 rounded-xl">
          <div className="flex justify-between items-center">
            <p className="text-black text-[18px] font-main font-medium">
              Explore Post
            </p>
            <button className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <Post posts={posts} />
        </div>
      </main>
      {/* right empyt white */}
      <div className="w-64 bg-white"></div>
    </div>
  );
};

export default Home;

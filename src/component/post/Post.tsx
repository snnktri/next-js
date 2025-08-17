"use client";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import PostHeader from "./PostHeaser";
import type { PostType } from "@/type/resources/post.type";

import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend, FiGlobe } from "react-icons/fi";
import SentCard from "./SentCard";
import { Repeat2 } from "lucide-react";

interface Props {
  posts: PostType[];
}

const Post: React.FC<Props> = ({ posts }) => {
  const [isDeleteOverLayOpen, setIsDeleteOVerLayOpen] = useState(false);
  const [isPostSentOpen, setIsPostSentOpen] = useState(false);

  const handleRemovePost = (id: string) => {
    console.log(id);
  };

  const handleClickSent = () => {
    setIsPostSentOpen(true);
  };

  return (
    <>
      {posts?.map((p, index) => (
        <div
          key={index}
          className="flex flex-col w-full h-auto p-2 border border-[#dfdfdf] relative"
        >
          {p?.isMine && (
            <PostHeader
              isRepost={p.isRepost}
              isMine={p.isMine}
              timestamp={p.timestamp}
              onRemove={() => handleRemovePost(p.id!)}
            />
          )}

          {/* User Info */}
          <div className="flex w-full p-2 gap-2 justify-start items-center">
            <Image
              src={p?.user?.profile || "/default-value.png"}
              alt="Profile Image"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-block font-semibold">
                {p?.user?.name}
              </p>
              <p className="text-gray-600 text-[12px]">{p?.user?.title}</p>
              <p className="text-gray-600 flex items-center text-[12px]">
                Posted{" "}
                {formatDistanceToNow(new Date(p?.timestamp ?? Date.now()), {
                  addSuffix: true,
                })}
                <span className="m-1 h-1 w-1 rounded-full bg-gray-500"></span>
                <FiGlobe className="w-4 h-4 text-gray-500" />
              </p>
            </div>
          </div>

          {/* Content and Image */}
          <div className="space-y-4 p-2">
            <p>{p.content}</p>
            {p.image && (
              <div className="bg-gray-100 rounded-lg">
                <Image
                  src={p.image}
                  alt="Post Image"
                  height={500}
                  width={800}
                  className="rounded-lg object-cover"
                />
              </div>
            )}

            <div className="flex justify-between items-center text-gray-500 text-sm">
              <p className="flex items-center gap-1">
                <AiOutlineLike className="w-5 h-5" />
                {p.likes} likes
              </p>
              <div className="flex gap-2 items-center">
                <p className="flex items-center gap-1">
                  <Repeat2 className="w-5 h-5" />
                  {p.reposts} reposts
                </p>
                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                <p className="flex items-center gap-1">
                  <FaRegComment className="w-5 h-5" />
                  {p.comments} comments
                </p>
              </div>
            </div>

            <hr className="border-gray-300" />
          </div>

          {/* Actions */}
          <div className="w-full flex justify-between items-center px-4 py-2">
            {/* All post actions */}

              {!p.isMine && (
                <>
                  <button className="flex items-center gap-1 cursor-pointer">
                    <AiOutlineLike className="w-6 h-6 text-gray-600" />
                    <span className="hidden md:block">Like</span>
                  </button>
                  <button className="flex items-center gap-1 cursor-pointer">
                    <FaRegComment className="w-6 h-6 text-gray-600" />
                    <span className="hidden md:block">Comment</span>
                  </button>
                </>
              )}

              <button className="flex items-center gap-1 cursor-pointer">
                <Repeat2 className="w-6 h-6 text-gray-600" />
                <span className="hidden md:block">Repost</span>
              </button>

              <button
                className="flex items-center gap-1 cursor-pointer"
                onClick={handleClickSent}
              >
                <FiSend className="w-6 h-6 text-gray-600" />
                <span className="hidden md:block">Send</span>
              </button>
          </div>

          {isPostSentOpen && (
            <SentCard onClick={() => setIsPostSentOpen(false)} />
          )}
        </div>
      ))}
    </>
  );
};

export default Post;

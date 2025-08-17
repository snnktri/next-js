import { format } from "date-fns";
import { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";
import DeleteOverlay from '@/component/profile/DeleteOverLay'

type PostHeaderProps = {
  isRepost?: boolean;
  isMine?: boolean;
  timestamp?: string;
  onRemove?: () => void;
};

const PostHeader: React.FC<PostHeaderProps> = ({
  isRepost,
  isMine,
  timestamp,
  onRemove,
}) => {
  const [isDeleteOverLayOpen, setIsDeleteOverLayOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center">
        {isRepost ? (
          <div className="flex gap-x-2 items-center text-[16px] text-[#777777]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
              />
            </svg>
            you reposted this post.{" "}
            {timestamp ? format(new Date(timestamp), "MMM d") : ""}
          </div>
        ) : (
          <div className="w-36" />
        )}

        {isMine && (
          <div className="relative group mr-5">
            <button
              className="text-red-500 rounded-full cursor-pointer"
              onClick={() => setIsDeleteOverLayOpen(true)} // ✅ show overlay
            >
              <CiCircleMinus size={28} />
            </button>

            <span
              className="absolute left-1/2 -translate-x-1/2 top-full mt-1 
               px-2 py-1 bg-gray-300 text-gray-700 whitespace-nowrap font-bold text-xs rounded 
               opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              Remove Post
            </span>
          </div>
        )}
      </div>

      {/* ✅ Render overlay if state is true */}
      {isDeleteOverLayOpen && (
        <DeleteOverlay
          onCancel={() => setIsDeleteOverLayOpen(false)}
          onConfirm={() => {
            onRemove?.();
            setIsDeleteOverLayOpen(false);
          }}
        />
      )}
    </>
  );
};

export default PostHeader;

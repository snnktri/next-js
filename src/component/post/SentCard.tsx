import { Send, X } from "lucide-react";
import React from "react";
import Image from "next/image";
interface Props {
  onClick: () => void;
}

const SentCard: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="fixed min-h-screen inset-0 flex items-center justify-center bg-black z-50">
      <div className="h-auto w-[590px] bg-white rounded-xl p-4 overflow-y-auto">
        <div className="w-full space-y-4">
          <div className="w-full flex justify-between items-center">
            <p>Send John Dow's Post</p>
            <button className="cursor-pointer" onClick={onClick}>
              <X />
            </button>
          </div>
          <input
            type="text"
            className="w-full py-2 px-4 border-[1.5px] border-[#dfdfdf] rounded-sm
            bg-[#ffffff] text-[#777777] font-medium"
            placeholder="Type a name"
          />
        </div>
        <div className="w-full space-y-4 py-8">
          <SendToFriends />
          <SendToFriends />
        </div>
      </div>
    </div>
  );
};

export default SentCard;


const SendToFriends = () => {
  return (
    <>
      <div className="px-4 flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src="/network/avatar1.png"
              alt="avatar.png"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-black font-medium text-base">
              Lewis Hamilton
            </h2>
            <p className="text-[#7d7d7d] text-sm">
              English Teacher at Global Higher Secondary School
            </p>
          </div>
        </div>
        <button className="text-blue-500">
          <Send />
        </button>
      </div>
      <hr className="my-2 border-t border-[#dfdfdf]" />
    </>
  );
};

'use client';

import React, { useState } from "react";
import Image from "next/image";
import type { PersonPartial } from "@/type/resources/person.type";
import { format } from "date-fns";
import { FiPlus } from "react-icons/fi";
import Button from "@/component/ux/ButtonCustom"

interface Props {
  data: PersonPartial;
}
const ConnectionCard: React.FC<Props> = ({ data }) => {
  const [isFollowed, setIsFollowed] = useState(data.isFollowed);

  const handleCLick = () => {
    setIsFollowed((isFollowed) => !isFollowed);
    console.log("Click")
  }
  return (
    <>
      <div className="border-1 border-[#dfdfdf] bg-[#f7f7f7] px-4 py-2 rounded-lg flex gap-1 items-center">
        <div className="relative h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src={data.avatar || "/network/avatar1.png"}
            alt="avatar.png"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-[#111111] text-[16px] font-medium">
              {data.name}
            </h3>
            <p className="text-[14px] text-[#777777]">
              {data.role} at {data.university}
            </p>
            <p className="text-[14px] text-[#777777]">
              Connected on {" "}
              {data.connectionDate
                ? format(new Date(data.connectionDate), "MMMM d, yyyy")
                : "Unknown Date"}
            </p>
          </div>
          { isFollowed ? 
          (<Button
            onClick={handleCLick}>
            <svg
              width="12"
              height="12" 
              viewBox="0 0 17 17"
              fill="currentColor"
            
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.57292 10.7504C8.44167 10.7504 10.8379 12.8991 11.1529 15.7566C11.1754 15.9141 11.1192 16.0716 11.0179 16.1954C10.9167 16.3191 10.7479 16.3754 10.5904 16.3754H0.555418C0.476259 16.376 0.397941 16.3591 0.326009 16.3261C0.254077 16.293 0.190291 16.2446 0.139168 16.1841C0.0870819 16.1246 0.0481364 16.0548 0.0248744 15.9792C0.00161228 15.9036 -0.00544334 15.8239 0.0041681 15.7454C0.296668 12.8991 2.70417 10.7504 5.57292 10.7504ZM5.62467 2.87539C6.51977 2.87539 7.37822 3.23097 8.01115 3.8639C8.64409 4.49684 8.99967 5.35528 8.99967 6.25039C8.99967 7.14549 8.64409 8.00394 8.01115 8.63687C7.37822 9.26981 6.51977 9.62539 5.62467 9.62539C4.72956 9.62539 3.87112 9.26981 3.23818 8.63687C2.60525 8.00394 2.24967 7.14549 2.24967 6.25039C2.24967 5.35528 2.60525 4.49684 3.23818 3.8639C3.87112 3.23097 4.72956 2.87539 5.62467 2.87539ZM12.1317 0.725512L12.2104 0.789637L14.0622 2.64251L15.9139 0.789637C16.0071 0.696627 16.13 0.639267 16.2612 0.627549C16.3923 0.615832 16.5234 0.650499 16.6317 0.725512L16.7104 0.789637C16.7628 0.841888 16.8044 0.903961 16.8327 0.972299C16.8611 1.04064 16.8757 1.1139 16.8757 1.18789C16.8757 1.26188 16.8611 1.33514 16.8327 1.40347C16.8044 1.47181 16.7628 1.53389 16.7104 1.58614L14.8575 3.43789L16.7104 5.28964C16.8101 5.38885 16.869 5.52179 16.8755 5.66226C16.882 5.80273 16.8356 5.94055 16.7455 6.04854C16.6555 6.15654 16.5282 6.22688 16.3889 6.24571C16.2495 6.26454 16.1082 6.23048 15.9927 6.15026L15.9139 6.08614L14.0622 4.23326L12.2104 6.08614C12.1172 6.17915 11.9943 6.23651 11.8632 6.24822C11.732 6.25994 11.6009 6.22527 11.4927 6.15026L11.4139 6.08614C11.3615 6.03389 11.32 5.97181 11.2916 5.90347C11.2633 5.83514 11.2487 5.76188 11.2487 5.68789C11.2487 5.6139 11.2633 5.54064 11.2916 5.4723C11.32 5.40396 11.3615 5.34189 11.4139 5.28964L13.2668 3.43789L11.4139 1.58614C11.3143 1.48692 11.2554 1.35398 11.2489 1.21351C11.2424 1.07304 11.2887 0.935226 11.3788 0.827231C11.4689 0.719237 11.5961 0.648894 11.7355 0.630066C11.8748 0.611238 12.0162 0.64529 12.1317 0.725512Z"
                fill="currentColor"
              />
            </svg>
            Unfollow
          </Button>
          ):
          (<Button
            onClick={handleCLick}>
                  <FiPlus /> Follow
                </Button>)}
        </div>
      </div>
    </>
  );
};

export default ConnectionCard;

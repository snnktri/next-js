"use client";
import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import {
  NotificationCategory,
  NotificationPartial,
} from "@/type/resources/notification.type";
import { iconMap } from "@/data/notificationMockData";
import { messageMap } from "@/data/notificationMockData";
import { formatDistanceToNow } from "date-fns";

interface Props {
  data: NotificationPartial;
}

const NotificationCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-2 w-full flex justify-between px-4 items-center bg-gray-50 rounded-xl py-4">
      <div className="flex gap-x-2">
        <div className="relative w-12 h-12 max-w-[54px] overflow-hidden rounded-full">
          <Image
            src={data.avatar || "/network/avatar1.png"}
            alt="avatar"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-0.5">
          <p className="flex gap-x-1 items-center">
            <span className="text-black font-medium">{data.name}</span>
            <span className="text-gray-500">
              {messageMap[data.category as NotificationCategory]}
            </span>
            <span className="text-gray-500 text-base">
              {iconMap[data.category as NotificationCategory]}
            </span>
          </p>
          <p className="text-sm text-blue-600">
            Uploaded{" "}
            {formatDistanceToNow(new Date(data.timestamp ?? Date.now()), {
              addSuffix: true,
            }).replace("about ", "")}
            
          </p>
        </div>
      </div>
      <button
        className="text-2xl font-bold cursor-pointer"
        onClick={() => alert("Three dot click")}
      >
        <BsThreeDots />
      </button>
    </div>
  );
};

export default NotificationCard;

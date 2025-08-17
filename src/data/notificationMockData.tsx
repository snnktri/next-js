import { NotificationCategory, NotificationPartial } from "@/type/resources/notification.type";
import { ReactElement } from 'react'; 
import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { BiRepost } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { MdOutlineSimCardDownload } from "react-icons/md";

export const mockNotifications: NotificationPartial[] = [
  {
    avatar: "/network/avatar1.png",
    name: "Alice Johnson",
    category: "like",
    timestamp: "2025-07-01T10:00:00Z",
  },
  {
    avatar: "/network/avatar2.png",
    name: "Bob Smith",
    category: "comment",
    timestamp: "2025-07-01T10:05:00Z",
  },
  {
    avatar: "/network/avatar3.png",
    name: "Carol Taylor",
    category: "attachment",
    timestamp: "2025-07-01T10:10:00Z",
  },
  {
    avatar: "/network/avatar1.png",
    name: "David Lee",
    category: "follow",
    timestamp: "2025-07-01T10:15:00Z",
  },
  {
     avatar: '/network/avatar1.png',
    name: "Eve Miller",
    category: "follow_back",
    timestamp: "2025-07-01T10:20:00Z",
  },
  {
     avatar: '/network/college2.png',
    name: "New Angel School",
    category: "download_resume",
    timestamp: "2025-07-01T10:25:00Z",
  },
  {
     avatar: '/network/avatar2.png',
    name: "Youngs Mind High School",
    category: "seen_resume",
    timestamp: "2025-07-01T10:30:00Z",
  },
    {
    avatar: '/network/avatar2.png',
    name: "Youngs Mind High School",
    category: "seen_resume",
    timestamp: "2025-07-01T14:20:56.789Z",
  },
];



export const iconMap: Record<NotificationCategory, ReactElement> = {
  like: <AiFillLike />,
  comment: <FaRegComment />,
  attachment: <IoMdSend />,
  follow: <FaHandshake />,
  follow_back: <FaHandshake />,
  download_resume: <MdOutlineSimCardDownload />,
  seen_resume: <FiEye />,
  repost: <BiRepost />
};

export const messageMap: Record<NotificationCategory, string> = {
  like: 'liked your post',
  comment: 'commented on your post',
  attachment: 'attached a file',
  follow: 'started following you',
  follow_back: 'followed you back',
  download_resume: 'downloaded your resume',
  seen_resume: 'viewed your resume',
  repost: "Reponsted this"
};

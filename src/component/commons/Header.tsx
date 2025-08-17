"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const pathName = usePathname();

  const authRoutes = ["/signin", "/signup"];


  const handleClick = () => {
    setIsProfileOpen((prev) => !prev);
  }

    if (authRoutes.includes(pathName)) {
    return (
      <header className="bg-white w-full sticky top-0 z-50 px-4 py-3">
        <div className="flex start">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              height={32}
              width={32}
              alt="logo"
              className="object-contain"
            />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white w-full sticky top-0 z-50">
      <div className="flex items-center justify-between border-b-[1.5px] border-[var(--color-gray)] px-4 pt-2">
        {/* Logo */}
        <div className="w-auto h-auto flex items-center">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              height={32}
              width={32}
              alt="logo"
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-12 items-center">
            <li>
              <Link
                href="/"
                className={`text-black text-[18px] ${
                  pathName === "/" ? "border-b-2 border-black" : ""
                }`}
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/job-feed"
                className={`text-black text-[18px] ${
                  pathName === "/job-feed" ? "border-b-2 border-black" : ""
                }`}
              >
                Job Feed
              </Link>
            </li>
            <li>
              <Link
                href="/network"
                className={`text-black text-[18px] ${
                  pathName.startsWith("/network") ? "border-b-2 border-black" : ""
                }`}
              >
                Network
              </Link>
            </li>
          </ul>
        </nav>

        {/* Notification and Profile */}
        <div className="flex gap-4 items-center relative">
          
          <Link
            href="/notification"
            className={`relative h-14 w-14 flex items-center justify-center
              ${pathName === "/notification" ? "border-b-2 border-black" : ""}`}
          >
            <span className="absolute h-2 w-2 rounded-full bg-red-800 top-4 translate-x-2"></span>
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
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </Link>
          <button onClick={handleClick} className={`h-14 w-14 flex items-center justify-center cursor-pointer
            ${pathName === "/userProfile"? "border-b-2 border-black" : ""}`}>
            <Image
              src="/assets/profile.png"
              width={32}
              height={32}
              alt="profile"
              className="object-contain rounded-full border-[1.5px] border-[#EEEEEE]"
            />
          </button>

          {
            isProfileOpen && (
              <div className="absolute flex flex-col justify-start -right-6
               top-16 px-4 pt-2 pb-4 border-2 border-gray-300 rounded-xl">
                <Link href="/userProfile"
                className="text-gray-700 font-medium
                px-6 py-2 hover:bg-blue-500 hover:text-white rounded-md">Profile</Link>
                <Link href="/signin"
                 className="text-gray-700 font-medium
                px-6 py-2 hover:bg-blue-500 hover:text-white rounded-md">Logout</Link>
              </div>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;

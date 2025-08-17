"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const UserProfile = () => {

  // route define
  const route = useRouter();
  const [resume, setResume] = useState<File | null>(null);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const resume = e.target.files?.[0];
    if (resume) {
      setResume(resume);
    }
  };

  const handleCLickforUpdateResume = () => {
    console.log("updated button click");
  }
  const handleClickBuildResume = () => {
    route.push("/cv-builder");
  }
  return (
    <div className="w-full flex justify-between ml-5">
      {/* resume builder section */}
      <div className=" w-full flex flex-col items-center gap-6">
        {/* user details */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-200 relative">
            <Image
              src="/network/avatar1.png"
              alt="profile"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-md">
              <svg
                width="12"
                height="13"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.625 9.375H1.31125L7.9975 2.68876L7.31125 2.00251L0.625 8.68875V9.375ZM0 10V8.425L8.2375 0.180009C8.30208 0.122926 8.37292 0.0787595 8.45 0.0475096C8.52708 0.0162596 8.60771 0.000426136 8.69187 9.46963e-06C8.77604 -0.000407197 8.85729 0.0129262 8.93563 0.0400095C9.01479 0.0662595 9.08771 0.113759 9.15438 0.182509L9.82125 0.853759C9.89 0.920009 9.93708 0.992925 9.9625 1.07251C9.9875 1.15168 10 1.23084 10 1.31001C10 1.39501 9.98583 1.47626 9.9575 1.55376C9.92875 1.63084 9.88333 1.70147 9.82125 1.76563L1.57438 10H0ZM7.64875 2.35126L7.31125 2.00251L7.9975 2.68876L7.64875 2.35126Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className="text-center">
            <h2 className="text-[16px] font-medium text-black">Matt Spencer</h2>
            <p className="flex items-center gap-1 text-[#777777] text-[12px]">
              Co-ordinator & Maths Teacher at Nepal Higher Secondary School
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.625 9.375H1.31125L7.9975 2.68876L7.31125 2.00251L0.625 8.68875V9.375ZM0 10V8.425L8.2375 0.180009C8.30208 0.122926 8.37292 0.0787595 8.45 0.0475096C8.52708 0.0162596 8.60771 0.000426136 8.69187 9.46963e-06C8.77604 -0.000407197 8.85729 0.0129262 8.93563 0.0400095C9.01479 0.0662595 9.08771 0.113759 9.15438 0.182509L9.82125 0.853759C9.89 0.920009 9.93708 0.992925 9.9625 1.07251C9.9875 1.15168 10 1.23084 10 1.31001C10 1.39501 9.98583 1.47626 9.9575 1.55376C9.92875 1.63084 9.88333 1.70147 9.82125 1.76563L1.57438 10H0ZM7.64875 2.35126L7.31125 2.00251L7.9975 2.68876L7.64875 2.35126Z"
                  fill="black"
                />
              </svg>
            </p>
            <p className="text-[#777777] text-[12px]">Joined on Apr 7, 2025</p>
          </div>
        </div>
        {/* resume builders */}
        <div className="text-center space-y-2">
          <h3 className="text-[#777777] text-[24px] font-medium">Resume</h3>
          <div className="text-center text-[14px] font-medium run decoration-violet-50">
            <span className="block">Stand Out with Your Resume</span>
            <span className="block">
              Want to get noticed faster? Add your resume so schools and
              colleges
            </span>
            <span className="block">
              can see your teaching experience right away.
            </span>
            <span className="block">
              It makes applying easier and shows that you’re serious about new
              opportunities
            </span>
          </div>
        </div>
        {/* uploade, update and create section */}
        <div className="flex flex-col gap-4 justify-center">
          <div
            className="flex items-center p-4 justify-center gap-2 border-1 border-dashed
           rounded-md border-gray-500 rounded="
          >
            <div className="text-black">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.99967 21.6667C2.26634 21.6667 1.63879 21.4058 1.11701 20.884C0.59523 20.3622 0.333897 19.7342 0.333008 19V16.3333C0.333008 15.9556 0.461008 15.6391 0.717008 15.384C0.973008 15.1289 1.28945 15.0009 1.66634 15C2.04323 14.9991 2.36012 15.1271 2.61701 15.384C2.8739 15.6409 3.00145 15.9573 2.99967 16.3333V19H18.9997V16.3333C18.9997 15.9556 19.1277 15.6391 19.3837 15.384C19.6397 15.1289 19.9561 15.0009 20.333 15C20.7099 14.9991 21.0268 15.1271 21.2837 15.384C21.5406 15.6409 21.6681 15.9573 21.6663 16.3333V19C21.6663 19.7333 21.4055 20.3613 20.8837 20.884C20.3619 21.4067 19.7339 21.6676 18.9997 21.6667H2.99967ZM9.66634 5.46667L7.16634 7.96667C6.89967 8.23333 6.58323 8.36133 6.21701 8.35067C5.85079 8.34 5.5339 8.20089 5.26634 7.93333C5.0219 7.66667 4.8939 7.35555 4.88234 7C4.87079 6.64444 4.99879 6.33333 5.26634 6.06667L10.0663 1.26667C10.1997 1.13333 10.3441 1.03911 10.4997 0.983999C10.6552 0.928888 10.8219 0.900888 10.9997 0.899999C11.1775 0.89911 11.3441 0.92711 11.4997 0.983999C11.6552 1.04089 11.7997 1.13511 11.933 1.26667L16.733 6.06667C16.9997 6.33333 17.1277 6.64444 17.117 7C17.1063 7.35555 16.9783 7.66667 16.733 7.93333C16.4663 8.2 16.1499 8.33911 15.7837 8.35067C15.4175 8.36222 15.1006 8.23422 14.833 7.96667L12.333 5.46667V15C12.333 15.3778 12.205 15.6947 11.949 15.9507C11.693 16.2067 11.3766 16.3342 10.9997 16.3333C10.6228 16.3324 10.3063 16.2044 10.0503 15.9493C9.79434 15.6942 9.66634 15.3778 9.66634 15V5.46667Z"
                  fill="black"
                />
              </svg>
            </div>
            <div>
              <input
                id="uploade-resume"
                type="file"
                accept=".pdf, .doc"
                className="hidden"
                onChange={handleFileInput}
              />
              <label
                htmlFor="uploade-resume"
                className="text-[16px] font-medium text-[#000000]
                cursor-pointer"
              >
                {!resume ? "Upload Resume" : resume.name}
              </label>
              <p className="text-[12px] text-[#7777777]">
                Only Pdf and Docx file
              </p>
            </div>
          </div>

          <button
            className="bg-gray-700 text-white text-center py-4 px-6 rounded-lg
          hover:bg-gray-800 transition-colors cursor-pointer flex gap-2 text-[16px]"
          onClick={handleClickBuildResume}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 14.25V18H3.75L14.81 6.94L11.06 3.19L0 14.25ZM17.71 4.04C17.8027 3.94749 17.8762 3.8376 17.9264 3.71662C17.9766 3.59565 18.0024 3.46597 18.0024 3.335C18.0024 3.20403 17.9766 3.07435 17.9264 2.95337C17.8762 2.8324 17.8027 2.72251 17.71 2.63L15.37 0.289999C15.2775 0.197295 15.1676 0.123748 15.0466 0.0735662C14.9257 0.0233847 14.796 -0.00244522 14.665 -0.00244522C14.534 -0.00244522 14.4043 0.0233847 14.2834 0.0735662C14.1624 0.123748 14.0525 0.197295 13.96 0.289999L12.13 2.12L15.88 5.87L17.71 4.04Z"
                fill="white"
              />
            </svg>
            Build Resume
          </button>
          <button
            className="bg-blue-800 text-white text-center py-4 px-6 rounded-lg
          hover:bg-blue-900 transition-colors cursor-pointer flex gap-2 text-[16px] items-center"
          onClick={handleCLickforUpdateResume}>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 18C8.25 18 7.07933 17.7627 5.988 17.288C4.89667 16.8133 3.94667 16.1717 3.138 15.363C2.32933 14.5543 1.68767 13.6043 1.213 12.513C0.738335 11.4217 0.500668 10.2507 0.500001 9C0.499335 7.74933 0.737001 6.57867 1.213 5.488C1.689 4.39733 2.33033 3.44733 3.137 2.638C3.94367 1.82867 4.89367 1.187 5.987 0.713C7.08034 0.239 8.25133 0.00133333 9.5 0C10.8667 0 12.1627 0.291667 13.388 0.875C14.6133 1.45833 15.6507 2.28333 16.5 3.35V2C16.5 1.71667 16.596 1.47933 16.788 1.288C16.98 1.09667 17.2173 1.00067 17.5 1C17.7827 0.999333 18.0203 1.09533 18.213 1.288C18.4057 1.48067 18.5013 1.718 18.5 2V6C18.5 6.28333 18.404 6.521 18.212 6.713C18.02 6.905 17.7827 7.00067 17.5 7H13.5C13.2167 7 12.9793 6.904 12.788 6.712C12.5967 6.52 12.5007 6.28267 12.5 6C12.4993 5.71733 12.5953 5.48 12.788 5.288C12.9807 5.096 13.218 5 13.5 5H15.25C14.5667 4.06667 13.725 3.33333 12.725 2.8C11.725 2.26667 10.65 2 9.5 2C7.55 2 5.896 2.67933 4.538 4.038C3.18 5.39667 2.50067 7.05067 2.5 9C2.49933 10.9493 3.17867 12.6037 4.538 13.963C5.89734 15.3223 7.55133 16.0013 9.5 16C11.0833 16 12.5 15.525 13.75 14.575C15 13.625 15.825 12.4 16.225 10.9C16.3083 10.6333 16.4583 10.4333 16.675 10.3C16.8917 10.1667 17.1333 10.1167 17.4 10.15C17.6833 10.1833 17.9083 10.304 18.075 10.512C18.2417 10.72 18.2917 10.9493 18.225 11.2C17.7417 13.1833 16.6917 14.8127 15.075 16.088C13.4583 17.3633 11.6 18.0007 9.5 18ZM10.5 8.6L13 11.1C13.1833 11.2833 13.275 11.5167 13.275 11.8C13.275 12.0833 13.1833 12.3167 13 12.5C12.8167 12.6833 12.5833 12.775 12.3 12.775C12.0167 12.775 11.7833 12.6833 11.6 12.5L8.8 9.7C8.7 9.6 8.625 9.48767 8.575 9.363C8.525 9.23833 8.5 9.109 8.5 8.975V5C8.5 4.71667 8.596 4.47933 8.788 4.288C8.98 4.09667 9.21733 4.00067 9.5 4C9.78267 3.99933 10.0203 4.09533 10.213 4.288C10.4057 4.48067 10.5013 4.718 10.5 5V8.6Z"
                fill="white"
              />
            </svg>
            Update Resume
          </button>
        </div>
      </div>
      {/* uploade section */}
      <div
        className="py-2.5 h-12 px-4 border-1 border-dashed border-[#aeaeae] rounded-md bg-[#ffffff]
      flex items-center"
      >
        <p className="text-[#aeaeae] font-medium text-center text-nowrap">
          No resume uploaded
        </p>
      </div>
    </div>
  );
};

export default UserProfile;

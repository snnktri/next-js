"use client";
import Image from "next/image";
import React from "react";
import { FcMenu } from "react-icons/fc";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import LeftBar from "../../component/job-component/LeftBar";
import { useState } from "react";
import JobFilterOverLay from "../../component/job-component/JobFilterOverLay";
import Button from "@/component/ux/ButtonCustom";
import AboutText from "@/component/profile/AboutText";

const JobFeed = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  // passing text for about

  const CONTETN = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, libero explicabo. Temporibus hic praesentium numquam doloremque aspernatur. Consequatur assumenda quisquam nostrum veniam
   sunt distinctio neque voluptatum animi qui, earum impedit?
  Cum nam nihil, nulla ipsa in ea accusantium. Quae,
  necessitatibus repellendus, debitis ad pariatur ipsum dolores, eum quasi nemo architecto nesciunt vitae fugiat nisi sint? Dolore totam alias ex illo.
  Ipsum, officia est! Eveniet sapiente reiciendis te
  netur, optio iusto molestias inventore illum doloremque!
   Magnam perspiciatis tempora, totam cupiditate dolores tempore eligendi pariatur eaque architecto animi eveniet enim dolorum consectetur corrupti.
  Dolorum ducimus natus, enim architecto, error commodi totam
   sint cum mollitia rem illum nobis earum fugiat cupiditate similique minima.
    Recusandae fuga aliquid iure natus reiciendis incidunt asperiores, maxime commodi praesentium?
    jdaf Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque recusandae iusto hic ipsa laudantium non repellat
     similique magnam. Quae iure saepe nesciunt amet sequi deleniti libero illum repellendus dolorem est.
    A quis ipsum, aspernatur ad enim rerum id doloremque at reiciendis harum autem, animi sequi est nostrum.
     Quis ipsa, dignissimos, debitis quaerat adipisci inventore sit labore, aut at ea ab?`;

  return (
    <div className="space-y-2">
      <div className="w-full my-8 space-y-4">
        {/* top section job discription and opening */}
        <div className="flex gap-4">
          <div
            className="w-1/3 px-4 py-[10px] border-1 rounded-[9px] border-[#dfdfdf]
            flex justify-between items-center"
          >
            <h2 className="text-[18px] text-black font-semibold">
              Browser Job Openings
            </h2>
            <button className="cursor-pointer">
              <FcMenu size={28} onClick={() => setFilterOpen(true)} />
            </button>
          </div>
          <div
            className="flex-1 py-[10px] px-4 border-1
         rounded-[10px] border-[#dfdfdf] font-semibold"
          >
            <h2 className="text-black text-[18px]">Job Description</h2>
          </div>
        </div>
        <div className="flex gap-4">
          {/* left bar */}
          <div className="w-1/3 space-y-2 hidden md:block">
            <LeftBar />
            <LeftBar />
            <LeftBar />
            <LeftBar />
            <LeftBar />
            <LeftBar />
            <LeftBar />
          </div>
          {/* right bar */}
          <div className="flex-1 flex-col">
            {/* header section */}
            <header className="px-6 py-7 flex flex-col border-1 border-[#dfdfdf] rounded-t-xl">
              {/*  header title, logo section*/}
              <div className="flex justify-between items-center">
                {/* left of header */}
                <div className="flex justify-between">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center justify-center">
                      <div className="">
                        <Image
                          src="/job/school1.png"
                          alt="school.png"
                          height={28}
                          width={28}
                          className="object-cover"
                        />
                      </div>
                      <p className="text-gray-600 text-sm flex items-center">
                        <span>Mount Horizon School</span>
                        <span className="mx-1 h-1 w-1 rounded-full bg-gray-500 self-center"></span>
                        <span>Kathmandu, Nepal</span>
                      </p>
                    </div>
                    <div className="flex justify-between gap-x-4 items-center">
                      <h2 className="text-[22px] gray-700 font-medium">
                        English Language Teacher (Grade 9-10)
                      </h2>
                      <span className="text-[12px] text-gray-500">
                        Full time
                      </span>
                    </div>
                  </div>
                </div>
                {/* right with book mark and easy apply */}
                <div className="flex gap-4">
                  <button className="px-1 cursor-pointer group">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform transition-transform duration-300 origin-top group-hover:scale-y-130"
                    >
                      <path
                        className="fill-white stroke-black group-hover:fill-black transition-colors duration-300"
                        d="M13 1H3C2.46957 1 1.96086 1.14335 1.58579 1.39852C1.21071 1.65369 1 1.99977 1 2.36063V12.6593C1.00003 12.7188 1.02305 12.7774 1.06676 12.829C1.11047 12.8806 1.17334 12.9235 1.24907 12.9534C1.32481 12.9833 1.41075 12.9991 1.49831 12.9993C1.58587 12.9995 1.67197 12.9841 1.748 12.9545L7.008 10.9102C7.31013 10.7928 7.65205 10.731 8 10.731C8.34794 10.731 8.68987 10.7928 8.992 10.9102L14.252 12.9552C14.3281 12.9848 14.4143 13.0002 14.5019 13C14.5896 12.9998 14.6756 12.9839 14.7514 12.9539C14.8271 12.9239 14.89 12.8809 14.9336 12.8292C14.9773 12.7775 15.0001 12.7189 15 12.6593V2.36063C15 1.99977 14.7893 1.65369 14.4142 1.39852C14.0391 1.14335 13.5304 1 13 1Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="cursor-pointer text-[#333333] font-bold bg-[#6aafff]
                flex items-center justify-center px-2 rounded-xl gap-1
                text-[12px]"
                  >
                    <AiFillThunderbolt /> <span>Easy Apply</span>
                  </button>
                </div>
              </div>
              {/* applicant section */}
              <div className="mt-1 flex gap-2">
                <p className="text-[#23b081] text-sm">5 hours ago</p>
                <p className="text-[#555555] text-sm">
                  Application Deadline: 6 days from today
                </p>
                <p className="text-[12px] text-[#1f1f1f] flex items-center gap-1 justify-center">
                  <MdOutlineWorkOutline /> <span>Applicants</span>
                </p>
              </div>
            </header>
            {/* main content section */}
            <main className="py-10 px-6 border-1 border-[#dfdfdf] space-y-4">
              <div className="space-y-2">
                <h2 className="text-[18px] text-[#111111] font-medium">
                  Job Description
                </h2>
                <p className="text-sm text-black">
                  We are seeking a passionate and qualified English Language
                  Teacher to join our secondary school team and guide students
                  of Grade 9 and 10 in developing their reading, writing,
                  speaking, and critical thinking skills. The ideal candidate
                  will have strong subject knowledge and a student-centered
                  teaching approach aligned with curriculum standards.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-[18px] text-[#111111] font-medium">
                  Key Responsibility
                </h2>

                <ul className="text-sm text-black list-disc list-inside">
                  <li>
                    Deliver engaging and age-appropriate lessons in English
                    language and literature.
                  </li>
                  <li>
                    Prepare lesson plans, teaching materials, and assessments in
                    alignment with national curriculum standards.
                  </li>
                  <li>
                    Foster a positive and inclusive classroom environment that
                    promotes student participation and critical thinking.
                  </li>
                  <li>
                    Evaluate student progress through regular assignments,
                    quizzes, and examinations.
                  </li>
                  <li>
                    Provide timely and constructive feedback to students and
                    communicate progress with parents when necessary.
                  </li>
                  <li>
                    Participate actively in staff meetings, professional
                    development workshops, and school events.
                  </li>
                  <li>
                    Support students in building strong academic and
                    communication skills for success in national-level
                    examinations.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="text-[18px] text-[#111111] font-medium">
                  Requirements
                </h2>

                <ul className="text-sm text-black list-disc list-inside">
                  <li>
                    Bachelor’s degree in English, Education, or a related field
                    (Master’s preferred).
                  </li>
                  <li>
                    Teaching license or certification (as per national
                    standards).
                  </li>
                  <li>
                    Minimum 2 years of experience teaching English at the
                    secondary level.
                  </li>
                  <li>Strong classroom management and communication skills.</li>
                  <li>
                    Familiarity with [National Curriculum / Cambridge / IB –
                    adjust as needed].
                  </li>
                  <li>
                    Ability to integrate technology in teaching (e.g.,
                    presentations, digital resources).
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="text-[18px] text-[#111111] font-medium">
                  Preferred Skills
                </h2>

                <ul className="text-sm text-black list-disc list-inside">
                  <li>
                    Training in student-centered and inclusive teaching
                    strategies.
                  </li>
                  <li>Experience with online/hybrid teaching tools.</li>
                  <li>
                    Excellent written and verbal English communication skills.
                  </li>
                </ul>
              </div>
            </main>
            {/* about section */}
            <footer className="p-6 flex flex-col border-1 border-[#dfdfdf] rounded-b-xl ">
              <div className="space-y-2">
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#1f1f1f] font-medium">
                    About the school
                  </h2>
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <div className="border-[0.5px] border-[#dfdfdf]">
                          <Image
                            src="/job/school1.png"
                            alt="school.png"
                            height={72}
                            width={72}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[#111111]">Mount Horizon School</p>
                          <p className="text-[#33333]">2,107 followers</p>
                        </div>
                      </div>
                      <Button>
                        <FiPlus /> Follow
                      </Button>
                    </div>
                    <p className="text-gray-600 text-sm flex items-center">
                      <span>Mount Horizon School</span>
                      <span className="mx-1 h-1 w-1 rounded-full bg-gray-500 self-center"></span>
                      <span>Kathmandu, Nepal</span>
                    </p>
                  </div>
                </div>
                {/* description */}
                <AboutText content={CONTETN} />
              </div>
            </footer>
          </div>
        </div>
        {filterOpen && (
          <JobFilterOverLay
            filterOpen={filterOpen}
            onClick={() => setFilterOpen(false)}
          />
        )}
      </div>
      <div className="flex items-center text-gray-700">
        {/* Prev button */}
        <button className="pl-2 py-1 rounded hover:bg-gray-200">&lt;</button>

        {/* Page numbers */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
          <button
            key={page}
            className={`p-2 py-1 rounded ${
              page === 1 ? "bg-blue-600 text-white" : "hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        <span className="p-2">....</span>

        {/* Next button */}
        <button className="p-2 py-1 rounded hover:bg-gray-200">&gt;</button>
      </div>
    </div>
  );
};

export default JobFeed;

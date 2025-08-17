"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { FiChevronRight } from "react-icons/fi";
import InstitudeCard from "./InstitudeCard";
import type { UniversityPartail } from "@/type/resources/university.type";

import "swiper/css";
import "swiper/css/navigation";

interface Props {
  title: string;
  data: UniversityPartail[];
}

const InstitudeYouMayKnow: React.FC<Props> = ({ title, data }) => {
  return (
    <div className="w-full px-2 mb-4">
      <div className="flex justify-between text-[16px] font-medium mb-2">
        <p className="text-base font-medium">{title}</p>
        <button
          className="cursor-pointer text-sm font-medium"
         
        >
          Show More
        </button>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Gradient overlay on right */}
        {data.length > 4 && (
          <div
            className="absolute top-0 right-0 w-1/4 h-full pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to left, rgba(255,255,255,0.5) 0%, transparent 100%)",
            }}
          />
        )}

        {/* Navigation Button */}
        {data.length > 4 && (
          <button
            className="custom-next-univ absolute top-1/2 -right-1 transform -translate-y-1/2 z-40
            bg-white hover:bg-gray-50 shadow-md hover:shadow-lg rounded-full p-2
            transition-all duration-300 border border-gray-200"
            aria-label="Next university"
          >
            <FiChevronRight size={16} className="text-gray-600" />
          </button>
        )}

        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={8}
          slidesPerView={4}
          slidesPerGroup={1}
          allowTouchMove={true}
          navigation={{
            nextEl: ".custom-next-univ",
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 8 },
            640: { slidesPerView: 2, spaceBetween: 8 },
            768: { slidesPerView: 3, spaceBetween: 8 },
            1024: { slidesPerView: 4, spaceBetween: 8 },
          }}
          className="pb-2"
        >
          {data.map((university, index) => (
            <SwiperSlide key={index}>
              <InstitudeCard university={university} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InstitudeYouMayKnow;

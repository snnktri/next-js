"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { FiChevronRight } from "react-icons/fi";
import AvatarCard from "./AvatarCard";
import type { PersonPartial } from "@/type/resources/person.type";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  title: string;
  data: PersonPartial[];
  onShowMore: ()=>void
}

const YouMayKnow: React.FC<Props> = ({ title, data, onShowMore }) => {
  return (
    <div className="w-full px-2 mb-4">
      <div className="flex justify-between text-[16px] font-medium mb-2">
        <p className="text-base font-medium">{title}</p>
        <button className="cursor-pointer text-sm font-medium" onClick={onShowMore}>Show More</button>
      </div>
      <div className="relative w-full max-w-4xl">
        {/* Blend effect */}
        {data.length > 4 && (
          <div
            className="absolute top-0 right-0 w-1/4 h-full pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to left, rgba(255,255,255,0.5) 0%, transparent 100%)",
            }}
          />
        )}
        
        <div className="overflow-hidden"> 
          {/* Navigation button - positioned inside but with proper z-index */}
          {data.length > 4 && (
            <button className="custom-next-know absolute top-1/2 -right-1 transform
             -translate-y-1/2 z-40 bg-white hover:bg-gray-50 shadow-md
             hover:shadow-lg rounded-full p-2 transition-all
              duration-300 border border-gray-200">
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
              nextEl: ".custom-next-know",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 8 },
              640: { slidesPerView: 2, spaceBetween: 8 },
              768: { slidesPerView: 3, spaceBetween: 8 },
              1024: { slidesPerView: 4, spaceBetween: 8 },
            }}
            className="pb-2"
          >
            {data.map((person, index) => (
              <SwiperSlide key={index}>
                <AvatarCard person={person} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default YouMayKnow;
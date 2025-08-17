import React from "react";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import { UniversityPartail } from "@/type/resources/university.type";
import Button from "@/component/ux/ButtonCustom";
import Link from "next/link";

interface Props {
  university: UniversityPartail;
}

const InstitudeCard: React.FC<Props> = ({ university }) => {
  return (
    <div
      className="p-2 flex flex-col items-center justify-center border-1
        border-[#dfdfdf] bg-[#f7f7f7] w-auto rounded-md"
    >
      {/* avatar */}
      <Link className="w-full flex flex-col items-center justify-center" href="/collegeProfile">
        <div className="w-20 h-20 overflow-hidden rounded-full">
          <Image
            src={university?.avatar || "/college.png"}
            alt="profile.png"
            layout="responsive"
            width={80}
            height={80}
            className="object-cover object-center"
          />
        </div>
        {/* description */}
        <div className="flex flex-col items-center">
          <h3 className="text-[16px] font-medium text-[#111111]">
            {university?.name}
          </h3>
          <p className="text-[14px] font-medium text-[#777777]">
            {university?.university}
          </p>
        </div>
      </Link>
      {/* follow button */}
      <Button onClick={() => alert("follow click")}>
        <FiPlus /> Follow
      </Button>
    </div>
  );
};

export default InstitudeCard;

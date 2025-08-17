import React from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { PersonPartial } from "@/type/resources/person.type";
import Button from "@/component/ux/ButtonCustom"

interface Props {
  person: PersonPartial;
}

const AvatarCard: React.FC<Props> = ({ person }) => {
  return (
    <div className="p-2 flex flex-col items-center justify-center border border-[#dfdfdf] bg-[#f7f7f7] w-auto rounded-md">
      {/* Avatar */}
      <div className="w-20 h-20 overflow-hidden rounded-full">
        <Image
          src={person?.avatar || "/network/person.png"}
          alt={person?.name || "profile"}
          layout="responsive"
          width={80}
          height={80}
          className="object-cover object-center"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col items-center mt-2 text-center">
        <h3 className="text-[16px] font-medium text-[#111111]">
          {person.name}
        </h3>
        <p className="text-[14px] font-medium text-[#777777]">
          {person.role}
        </p>
        <p className="text-[14px] font-medium text-[#777777]">
          {person.university}
        </p>
      </div>

      {/* Follow button */}
      <Button>
        <FiPlus /> Follow
      </Button>
    </div>
  );
};

export default AvatarCard;

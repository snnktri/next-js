
import Header from "@/component/institudeAsUser/Header";
import OpenVacency from "@/component/institudeAsUser/OpenVacency";
import React from "react";

const RecruitmentAsUser = () => {
  return (
    <div className="w-full space-y-6">
      <Header />
      <hr className="-mx-8 border-t-2 border-[#dfdfdf]" />
      <div className="flex px-20 gap-2">
        <OpenVacency />
      </div>
    </div>
  );
};

export default RecruitmentAsUser;

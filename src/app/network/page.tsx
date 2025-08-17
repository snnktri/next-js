"use client";
import InstitudeYouMayKnow from "@/component/network/InstitudeYouMayKnow";
import PeopleCard from "@/component/network/PeopleCard";
import SearchCom from "@/component/network/SearchCom";
import YouMayKnow from "@/component/network/YouMayKnow";
import { PersonsDetails, UniversityDetails } from "@/data/networkMockData";
import { useState } from "react";

const Networks = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showMore, setShowMore] = useState<boolean>(false);


  return (
    <>
      {!showMore ? (
        <>
          <SearchCom
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <YouMayKnow
            title="People you may know"
            data={PersonsDetails}
            onShowMore={() => setShowMore(true)}
          />
          <InstitudeYouMayKnow
            title="Institute you may know"
            data={UniversityDetails}
          />
        </>
      ) : (
        <div className="space-y-4">
          <PeopleCard
            title="People you may know through mutual connection"
            data={PersonsDetails}
          />
          <PeopleCard
            title="People with matching job interest"
            data={PersonsDetails}
          />
          <PeopleCard
            title="People around your location"
            data={PersonsDetails}
          />
        </div>
      )}
    </>
  );
};

export default Networks;

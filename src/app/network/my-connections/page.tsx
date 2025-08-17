import SearchCom from "@/component/network/SearchCom";
import React from "react";
import ConnectionCard from "@/component/network/ConnectionCard"
import { PersonsDetails } from "@/data/networkMockData";

const MyConnections = () => {
  return (
    <>
      <SearchCom />
      <div className="space-y-4 w-full">
       {
        PersonsDetails.map((person, index) =>
        (
          <ConnectionCard key={index} data={person}/>
        ))
       }
 
      </div>
    </>
  );
};

export default MyConnections;

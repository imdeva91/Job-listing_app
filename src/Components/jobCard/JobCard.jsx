import React from "react";
import "./JobCard.css";
import { differenceInBusinessDays, differenceInDays, differenceInHours, differenceInMinutes } from "date-fns";

const JobCard = (props) => {

  return (
    <div
      id="jobCard"
      className=" bg-white sm:w-[60vw] w-[60vh] sm:h-[100px] h-[150px] shadow-md hover:shadow-xl  rounded-md flex flex-wrap items-center justify-around"
    >
      <div className="text-xl pl-3 ">
        <h1>{props.title}</h1>
        <h1 className="font-semibold">{props.companyName}</h1>
      </div>

      <div className="flex items-start  w-[20vw]  gap-3">
        {props.skills.map((skill) => (
          <div className="bg-gray-200 px-2 py-1  rounded-md" key={skill}>
            {skill}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1 pr-3">
        <div className="justify-end flex ">
          {differenceInHours(Date.now(), props.postedOn)} min ago |{" "}
          {props.type} | {props.location}
        </div>
        <div className="flex justify-end">
          <button className="px-3 py-1 border border-black font-medium rounded-3xl cursor-pointer">
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { AiFillInteraction } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { RiNotificationBadgeLine } from "react-icons/ri";

function Options() {
  return (
    <div className="flex">
      <div className="flex flex-row h-[64px] max-lg:h-[100px]   max-lg:ml-[50px] bg-[#FFFFFF]">
        <div className="flex max-lg:flex-col justify-center items-center">
          <BsFillCalendarDateFill className="ml-[103px]" />
          <span className="ml-[11px]">Calender</span>
          <AiFillInteraction className="ml-[200px] h-[22px]" />
          <span className="ml-[8px]">Activities</span>
          <FiUsers className="ml-[200px] h-[22px]" />
          <span className="ml-[8px] underline">Clients</span>
          <RiNotificationBadgeLine className="ml-[200px] h-[22px]" />
          <span className="ml-[8px]">Notifications</span>
        </div>
      </div>
    </div>
  );
}

export default Options;

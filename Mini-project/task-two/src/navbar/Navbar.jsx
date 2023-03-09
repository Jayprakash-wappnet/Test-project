import React from "react";
import { GrPrevious } from "react-icons/gr";
import {IoIosNotifications} from "react-icons/io"
import {IoMdSearch} from "react-icons/io"
import {IoIosSettings} from "react-icons/io"
import {TfiBackRight} from "react-icons/tfi"

function MainContent() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <button className="absolute rounded-lg w-[48px] h-[48px] top-[32px] left-[340px] bg-[#FFFFFF]">
          {" "}
          <GrPrevious className="mx-3" />{" "}
        </button>

        <p className="absolute w-[177px] h-[24px] left-[404px] top-[38px] text-[24px] text-[#0F1C35]">
          Theresa's Profile
        </p>
      <IoIosNotifications className="absolute w-[24px] h-[24px] top-[44px] left-[1486px]"/>
      <IoMdSearch className="absolute w-[24px] h-[24px] top-[44px] left-[1525px]"/>
      <IoIosSettings className="absolute w-[24px] h-[24px] top-[44px] left-[1568px]"/>
      <TfiBackRight className="absolute w-[24px] h-[24px] top-[44px] left-[1610px]"/>
      </div>
    </div>
  );
}

export default MainContent;

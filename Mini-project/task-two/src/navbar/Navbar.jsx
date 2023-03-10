import React from "react";
import { GrPrevious } from "react-icons/gr";
import Icons from "./Icons";
import { IoNotifications } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { TfiBackRight } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
function Navbar() {
  return (
    <div className="flex mt-[32px] pl-[32px] justify-between w-full">
      <div className="flex">
        <button className="rounded-lg w-[48px] h-[48px]  bg-[#FFFFFF]">
          <GrPrevious className="mx-3" />
        </button>
        <span className="ml-4 w-[177px] h-[24px] text-[24px] text-[#0F1C35]">
          Theresa's Profile
        </span>
      </div>
      <div className="flex pl-[600px] items-center">
        <Icons icons={<IoNotifications />} />
        <Icons
          icons={
            <>
              <BiSearch />
            </>
          }
        />
        <Icons
          icons={
            <>
              <IoIosSettings />
            </>
          }
        />
        <Icons
          icons={
            <>
              <TfiBackRight />
            </>
          }
        />
        <div className="flex ml-[20px]">
          <div className="flex justify-center">
            <img
              className="rounded-full h-10 w-10"
              src="../assets/face.jpg"
              alt="Rounded avatar"
            />
          </div>
          <div className="flex flex-col">
            <span className=" w-[99px] h-[16px] text-[16px] ml-2">
              Berkay Erdinc
            </span>

            <button className="bg-[#5EB182] w-[62px] h-[19px] text-[11px] rounded mt-[9px] ml-[8px] ">
              Assistant
            </button>
          </div>
          <div className="flex flex-col">
            <button className="w-[12.72px] h-[7.78] mt-[20px] ml-[18px]">
              {" "}
              <IoIosArrowDown />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

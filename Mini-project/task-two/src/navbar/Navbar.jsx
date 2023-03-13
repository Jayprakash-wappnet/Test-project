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
    <div className="flex max-lg:flex-col mt-[32px] pl-[32px] max-lg:pl-[4px] justify-between ">
      <div className="flex">
        <button className="rounded-lg h-[48px]  bg-[#FFFFFF]">
          <GrPrevious className="mx-3" />
        </button>
        <span className="ml-4 h-[24px] text-[24px] text-[#0F1C35]">
          Theresa's Profile
        </span>
      </div>
      <div className="flex pl-[800px] max-lg:pl-[10px] max-lg:flex-row items-center">
        <Icons icons={<IoNotifications />} />
        <Icons
          icons={
         
              <BiSearch />
            
          }
        />
        <Icons
          icons={
          
              <IoIosSettings />
          
          }
        />
        <Icons
          icons={
          
              <TfiBackRight />
          
          }
        />
        <div className="flex ">
          <div className="flex justify-center">
            <img
              className="rounded-full h-10  ml-[120px] max-lg:ml-[20px]"
              src="../assets/face.jpg"
              alt="Rounded avatar"
            />
          </div>
          <div className="flex flex-col">
            <span className=" h-[16px] text-[16px] ml-[20px]">
              Berkay Erdinc
            </span>

            <button className="bg-[#5EB182]  h-[19px] text-[11px] rounded mt-[9px] ml-[20px] ">
              Assistant
            </button>
          </div>
          <div className="flex flex-col">
            <button className=" h-[7.78] mt-[20px] ml-[18px]">
              
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

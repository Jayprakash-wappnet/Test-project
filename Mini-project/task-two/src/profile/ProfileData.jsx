import React from "react";
import { VscCircleSmallFilled } from "react-icons/vsc";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
function ProfileData() {
  return (
    <div className="flex flex-row max-lg:flex-col max-lg:w-[315px] max-lg:h-[350px]  max-lg:ml-[0px] mt-[36px] h-[152px] rounded-lg  bg-[#FFFFFF]">
      <div className="flex flex-col  max-lg:justify-center items-center h-[120px]">
        <img
          className="rounded-full  h-[100px]  max-lg:h-[40%] max-lg:w-[15%] mt-[16px] ml-[16px]"
          src="../assets/profile_4.jpg"
          alt="Not found"
        />
      </div>
      <div className="flex flex-col ml-[10px]  mt-[40px] max-lg:mt-[2px]">
        <span className="flex justify-start max-lg:justify-center h-[24px] text-[24px] max-lg:text-[20px] text-[#0F1C35]">
          Courtney Henry
        </span>
        <div className="flex flex-row max-lg:flex-col items-center justify-center ml-[8px] mt-[8px]">
          <span className="text-[#555B67] text-[12px]">
            courtney@example.com
          </span>
          <VscCircleSmallFilled className="mt-[5px] ml-[12px]" />
          <div className="flex max-lg:flex-row">
          <img
            className="rounded-full h-6  ml-[12px]"
            src="../assets/turkey.png"
            alt="Not found"
          />
          <span className="text-[12px]  text-[#555B67]">+90 552 489 8277</span>
          </div>
          <div className="flex max-lg:flex-row">
          <VscCircleSmallFilled className="mt-[5px] ml-[16px]" />
          <CiFacebook className="ml-[12px] mt-[5px]" />
          <CiTwitter className="ml-[12px] mt-[5px]" />
          <AiOutlineInstagram className="ml-[12px] mt-[5px]" />
          <AiOutlineLinkedin className="ml-[12px] mt-[5px]" />
          </div>
          
        </div>
      </div>
      <div className="flex max-lg:flex-row">
      <div className="flex flex-col items-center ml-[94px] mt-[42px] max-lg:ml-[1px]">
        <span className=" h-[24px] text-[24px] text-[#0F1C35]">
          500
        </span>
        <span className=" h-[24px] text-[12px] text-[#555B67] mt-[8px]">
          Completed Tour
        </span>
      </div>
      <div className="flex flex-col items-center ml-[30px] mt-[42px] max-lg:ml-[20px]">
        <span className=" h-[24px] text-[24px] text-[#0F1C35]">24</span>
        <span className=" h-[24px] text-[12px] text-[#555B67] mt-[8px]">
          Total Created Tour
        </span>
      </div>
      <div className="flex flex-col items-center ml-[30px] mt-[42px] max-lg:ml-[20px]">
        <span className=" h-[24px] text-[24px] text-[#0F1C35]">
          320
        </span>
        <span className=" h-[24px] text-[12px] text-[#555B67] mt-[8px]">
          Number of Clients
        </span>
      </div>
      </div>
     
    </div>
  );
}

export default ProfileData;

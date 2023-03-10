import React from "react";
import { VscCircleSmallFilled } from "react-icons/vsc";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
function ProfileData() {
  return (
    <div className="flex flex-row ml-[32px] mt-[36px] h-[152px]  bg-[#FFFFFF]">
      <div className="flex flex-col w-[120px] h-[120px]">
        <img
          className="rounded-full w-[120px] h-[120px] mt-[16px] ml-[16px]"
          src="../assets/profile_4.jpg"
          alt="Not found"
        />
      </div>
      <div className="flex flex-col ml-[32px]  mt-[40px]">
        <span className="w-[174px] h-[24px] text-[24px] text-[#0F1C35]">
          Courtney Henry
        </span>
        <div className="flex flex-row items-center justify-center ml-[8px] mt-[8px]">
          <span className="text-[#555B67] text-[12px]">
            courtney@example.com
          </span>
          <VscCircleSmallFilled className="mt-[5px] ml-[12px]" />
          <img
            className="rounded-full h-6 w-6 ml-[12px]"
            src="../assets/turkey.png"
            alt="Not found"
          />
          <span className="text-[12px] text-[#555B67]">+90 552 489 8277</span>
          <VscCircleSmallFilled className="mt-[5px] ml-[16px]" />
          <CiFacebook className="ml-[12px] mt-[5px]" />
          <CiTwitter className="ml-[12px] mt-[5px]" />
          <AiOutlineInstagram className="ml-[12px] mt-[5px]" />
          <AiOutlineLinkedin className="ml-[12px] mt-[5px]" />
        </div>
      </div>
      <div className="flex flex-col items-center ml-[94px] mt-[42px]">
        <span className="w-[44px] h-[24px] text-[24px] text-[#0F1C35]">
          500
        </span>
        <span className="w-[102px] h-[24px] text-[12px] text-[#555B67] mt-[8px]">
          Completed Tour
        </span>
      </div>
      <div className="flex flex-col items-center ml-[30px] mt-[42px]">
        <span className="w-[44px] h-[24px] text-[24px] text-[#0F1C35]">24</span>
        <span className="w-[102px] h-[24px] text-[12px] text-[#555B67] mt-[8px]">
          Total Created Tour
        </span>
      </div>
      <div className="flex flex-col items-center ml-[30px] mt-[42px]">
        <span className="w-[44px] h-[24px] text-[24px] text-[#0F1C35]">
          320
        </span>
        <span className="w-[102px] h-[24px] text-[12px] text-[#555B67] mt-[8px]">
          Number of Clients
        </span>
      </div>
    </div>
  );
}

export default ProfileData;

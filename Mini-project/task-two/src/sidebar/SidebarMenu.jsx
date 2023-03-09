import React from "react";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiShieldUserFill } from "react-icons/ri";
import { MdOutlineLiveHelp } from "react-icons/md";

function SidebarMenu() {
  return (
    <div>
      {/* <section className="flex gap-6"> */}
      <div className="bg-[#FFFFFF] w-[308px] h-[1080px] overflow-y-auto">
        <div className="w-[269px] h-[95px] left-[15px]">
          <div className="w-[202.31px] h-[35px] pt-[47px] mx-[25px]">
            <img
              src="./assets/logo-1.png"
              alt="Not found"
              className="left-[40px]"/>
          </div>
        </div>
        <div>
          <button className="w-[260px] h-[56px] left-[24px] mt-[9px] bg-[#2E63F6] rounded-lg	 absolute text-[#FFFFFF]">
            Create New Toure +
          </button>
        </div>
        <div className="flex items-center">
          <button className="flex w-[260px] items-center h-[56px] left-[24px] top-[184px] absolute text-[#555B67] ml-2">
            <BsFillCalendarMonthFill className="mr-3" />
            Calender
          </button>
          <button className="flex w-[260px] items-center h-[56px] left-[24px] top-[239px] absolute text-[#555B67] ml-2">
            <FaSearch className="mr-3" /> Search Property
          </button>
          <button className="flex w-[260px] items-center h-[56px] left-[24px] top-[303px] absolute text-[#555B67] ml-2">
            <FaUsers className="mr-3" />
            Clients
          </button>
          <button className="flex w-[260px] items-center h-[56px] left-[24px] top-[367px] absolute text-[#555B67] ml-2">
            <IoIosListBox className="mr-3" />
            MLS Lists
          </button>
          <button className="flex w-[260px] items-center h-[56px] left-[24px] top-[431px] absolute text-[#555B67] ml-2">
            <IoNotificationsSharp className="mr-3" />
            Notifications
          </button>
          <button className="flex w-[260px] items-center h-[56px] left-[24px] top-[499px] absolute text-[#555B67] ml-2">
            <RiShieldUserFill className="mr-3" />
            Users & Teams
          </button>
        </div>
        <div>
          <p className="absolute top-[984px] width-[96px] left-[40px] height-[24px] text-lg items-center">
            Need help?
          </p>
          <p className="flex absolute top-[1024px] width-[75px] left-[24px] height-[24px] text-base items-center">
            <MdOutlineLiveHelp className="mr-3" /> Help Desk
          </p>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;

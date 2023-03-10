import React from "react";
import Menu from "./Menu";
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
              className="left-[40px]"
            />
          </div>
        </div>
        <div>
          <button className="w-[260px] h-[56px] left-[24px] mt-[9px] bg-[#2E63F6] rounded-lg	  text-[#FFFFFF]">
            Create New Toure +
          </button>
        </div>
        <div className="">
          <Menu
            icon={
              <>
                <BsFillCalendarMonthFill />
              </>
            }
            text="Calender"
          />
          <Menu
            icon={
              <>
                <FaSearch />
              </>
            }
            text="Search Property"
          />
          <Menu
            icon={
              <>
                <FaUsers />
              </>
            }
            text="Clients"
          />
          <Menu
            icon={
              <>
                <IoIosListBox />
              </>
            }
            text="MLS Lists"
          />
          <Menu
            icon={
              <>
                <IoNotificationsSharp />
              </>
            }
            text="Notifications"
          />
          <Menu
            icon={
              <>
                <RiShieldUserFill />
              </>
            }
            text="Users & Teams"
          />
        </div>

        <div className="mt-[429px]">
          <p className=" width-[96px] mr-[172px] ml-[40px] height-[24px] text-lg">
            Need help?
          </p>
          <p className="flex mt-[16px] width-[75px] ml-[42px] height-[24px] text-base items-center">
            <MdOutlineLiveHelp className="mr-3" /> Help Desk
          </p>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;

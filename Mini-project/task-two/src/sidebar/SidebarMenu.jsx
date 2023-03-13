import React, { useState } from "react";
import Menu from "./Menu";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiShieldUserFill } from "react-icons/ri";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoMdList } from "react-icons/io";

function SidebarMenu() {
  const [sidebar, setSideBar] = useState(false);
  const handleSidebar = () => {
    return setSideBar(!sidebar);
  };

  return (
    <div>
      <div className="fixed">
        <div
          className={
            sidebar
              ? "bg-[#FFFFFF] w-[308px] h-[1080px] overflow-y-auto"
              : "hidden"
          }
        >
          <div className="flex flex-row items-center w-[269px] h-[95px] left-[15px]">
            <div className="w-[202.31px] h-[35px] mx-[25px]">
              <img
                src="./assets/logo-1.png"
                alt="Not found"
                className="left-[40px]"
              />
            </div>
            <div>
              <button className="border-lg border-black bg-blue-300 w-6 h-6 hover:bg-blue-500" onClick={handleSidebar}>X</button>
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

          <div className="mt-[10px]">
            <p className=" width-[96px] mr-[172px] ml-[40px] height-[24px] text-lg">
              Need help?
            </p>
            <p className="flex mt-[16px] width-[75px] ml-[42px] height-[24px] text-base items-center">
              <MdOutlineLiveHelp className="mr-3" /> Help Desk
            </p>
          </div>
        </div>
      </div>

      <div>
        <button className="h-10 w-10 top-0 left-0 fixed" onClick={handleSidebar}>
          <IoMdList fontSize={30} />
        </button>
      </div>
    </div>
  );
}

export default SidebarMenu;

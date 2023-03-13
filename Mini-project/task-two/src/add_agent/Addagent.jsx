import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { GrUserAdd } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

function Addagent() {
  return (
    <div className="flex flex-col">
      <div className="mt-[36px] ml-[16px] bg-[#FFFFFF] rounded-lg">
        <div className="flex flex-row justify-center">
          <span className=" mt-[24px] ml-[2px]">Manage Agent</span>
          <BiEdit className="ml-[86px] mt-[32px]" />
        </div>

        <div>
          <div>
            <button className=" w-[260px] h-[56px] left-[24px] mt-[9px]  rounded-lg	  text-[#0F1C35]">
              Create New Toure +
            </button>
          </div>
          <div className="border-[#555B67] border-2 rounded-lg flex flex-row items-center mr-[16px] h-[48px] ml-[16px] mt-[15px]">
            <AiFillSetting className="input-group flex flex-col ml-4" />
            <button className="input flex flex-col ml-[8px] rounded-lg	">
              Set Permission
            </button>
          </div>

          <div className="border-[#555B67] border-2 rounded-lg flex flex-row items-center mr-[16px] h-[48px] ml-[16px] mt-[15px]">
            <GrUserAdd className="input-group flex flex-col ml-4" />
            <button className="input flex flex-col ml-[8px] rounded-lg	">
              Edit Agent info
            </button>
          </div>
          <div className="border-[#555B67] border-2 rounded-lg mb-[16px] mr-[16px] ml-[16px] flex flex-row items-center  h-[48px] mt-[15px]">
            <AiFillDelete className="input-group flex flex-col ml-4" />
            <button className="input flex flex-col ml-[8px] rounded-lg	">
              Delete Agent
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-[300px] ml-[30px]">
        <span className="text-[#8B99B4] text-3 ">MEMBER SINCE 28 SEP,2022</span>
      </div>
    </div>
  );
}

export default Addagent;

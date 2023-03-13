import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="flex flex-row max-lg:ml-[0px] max-lg:w-[315px] bg-[#FFFFFF]">
      <div className="flex flex-row items-center  h-[48px] ml-[24px] mt-[15px]">
            <FiSearch className="input-group flex flex-col"/>
            <input placeholder="Search" className="input flex flex-col ml-[8px]" />
         
      </div>
    </div>
  );
}

export default SearchBar;

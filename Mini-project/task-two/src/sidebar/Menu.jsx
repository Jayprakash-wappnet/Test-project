import React from "react";

function Menu(props) {
  return (
    <div className="flex w-[260px] h-[56px] mx-6">
      <button className="flex px-6 ">
        <div className="w-[18px] h-[18.51px] mr-[5px] mt-[19px]">
          {props.icon}
        </div>
        <span className="ml-[5px] h-[24px] mt-[16px]">{props.text}</span>
      </button>
    </div>
  );
}

export default Menu;

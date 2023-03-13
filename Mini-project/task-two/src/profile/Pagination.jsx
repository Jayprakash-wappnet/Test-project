import React from 'react'
import {GrPrevious , GrNext } from "react-icons/gr"

function Pagination() {
  return (
    <div>
         <div className="flex flex-row  bg-[#FFFFFF]">
      <button className="border-[#555B67] border-2	 ml-[24px] mt-[16px] rounded-lg w-[30px] h-[30px]  bg-[#FFFFFF]">
          <GrPrevious className="mx-1" />
        </button>
        <button className="ml-[404px] mt-[16px] mb-[16px] rounded-lg  h-[30px]  bg-[#FFFFFF]">
          1
        </button>
        <button className="ml-[4px] mt-[16px] mb-[16px] rounded-lg  h-[30px]  bg-[#FFFFFF]">
          2
        </button>
        <button className="ml-[4px] mt-[16px] mb-[16px] rounded-lg  h-[30px]  bg-[#FFFFFF]">
          3
        </button>
        <button className="ml-[4px] mt-[16px] mb-[16px] rounded-lg  h-[30px]  bg-[#FFFFFF]">
          4
        </button>
        <button className="ml-[4px] mt-[16px] mb-[16px] rounded-lg  h-[30px]  bg-[#FFFFFF]">
          5
        </button>
        <button className="ml-[4px] mt-[16px] mb-[16px] rounded-lg  h-[30px]  bg-[#FFFFFF]">
          ...
        </button>
        <button className="ml-[4px] mt-[16px] mb-[16px] rounded-lg  h-[30px]  bg-[#FFFFFF]">
          45
        </button>
        <button className="ml-[404px] mt-[16px] mb-[16px] rounded-lg  h-[30px] bg-blue-600">
          <GrNext className='mx-1'/> 
        </button>
      </div>
      
    </div>
  )
}

export default Pagination

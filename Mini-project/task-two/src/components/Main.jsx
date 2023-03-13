import React from "react";
import SidebarMenu from "../sidebar/SidebarMenu";
import Navbar from "../navbar/Navbar";
import Addagent from "../add_agent/Addagent";
import MainContent from "../Main-content/MainContent";

function Main() {
  return (
    <div className="flex flex-row">
      <SidebarMenu />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row">
          <Navbar />
        </div>
        <div className="flex flex-row max-lg:flex-col">
          

          <MainContent/>
          <div className="flex flex-col">
        <Addagent />
      </div>
        </div>
      </div>
      
    </div>
  );
}

export default Main;

import React from "react";
import SidebarMenu from "../sidebar/SidebarMenu";
import Navbar from "../navbar/Navbar";
import ProfileData from "../profile/ProfileData";

function Main() {
  return (
    <div className="flex flex-row ">
      <SidebarMenu />
      <div className="flex flex-col">
        <Navbar />
        <ProfileData />
      </div>
    </div>
  );
}

export default Main;

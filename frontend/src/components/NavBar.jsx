import React from "react";
import { Menu } from "./Menu";
import {User2Icon } from "lucide-react";
import SideBar from "./SideBar";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-between p-6 shadow-2xl ">
        <div>Logo here</div>
        <div className="hidden md:flex">
          <Menu />
        </div>
        <div className="flex gap-2">
          <User2Icon />
          <SideBar/>
        </div>
      </div>
    </>
  );
}

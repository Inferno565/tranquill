import React from "react";
import { Menu } from "./Menu";
import { MenuIcon, User2Icon } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-between p-6 ">
        <div>Logo here</div>
        <div className="hidden md:flex">
          <Menu />
        </div>
        <div className="flex gap-2">
          <User2Icon />
          <MenuIcon className="md:hidden" />
        </div>
      </div>
    </>
  );
}

import { React, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Compass,
  HomeIcon,
  LogOut,
  PenTool,
  Settings,
  Trash2Icon,
  UserPenIcon,
  UserRoundX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileContent from "@/components/ProfileContent";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [isActive, setisActive] = useState("blogs");
  const navigate = useNavigate();

  const handleTabChange = (newTab) => {
    setisActive(newTab);
  };
  return (
    <>
      <div className=" bg-accent flex p-2 max-h-screen">
        <div className="flex flex-col gap-3 p-4 w-xs">
          <div className="text-center">Tranquill Logo</div>
          <div className="flex flex-col items-center">
            <Avatar className="size-30">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-lg">Name of user</div>
            <div className="text-sm">@username</div>
          </div>
          <hr className="border-1 border-black" />
          <div
            className="flex gap-1 hover:bg-secondary p-2 rounded-xl cursor-pointer"
            onClick={() => handleTabChange("blogs")}>
            <PenTool />
            My Blogs
          </div>
          <div
            className="flex gap-1 hover:bg-secondary p-2 rounded-xl cursor-pointer"
            onClick={() => handleTabChange("profile")}>
            <UserPenIcon />
            Edit Profile
          </div>
          <div
            className="flex gap-1 hover:bg-secondary p-2 rounded-xl cursor-pointer"
            onClick={() => handleTabChange("settings")}>
            <Settings />
            Settings
          </div>
          <div
            className="flex gap-1 hover:bg-secondary p-2 rounded-xl cursor-pointer"
            onClick={() => navigate("/")}>
            <HomeIcon />
            Go To Home Page
          </div>
          <div
            className="flex gap-1 hover:bg-secondary p-2 rounded-xl cursor-pointer"
            onClick={() => navigate("/explore")}>
            <Compass />
            Go To Explore Page
          </div>
          <div>
            <div className="flex p-2 rounded-xl cursor-pointer">
              <Button className="w-full">
                <LogOut />
                Log Out
              </Button>
            </div>
            <div className="flex p-2 rounded-xl cursor-pointer">
              <Button className="w-full bg-gray-600 hover:bg-gray-400">
                <UserRoundX />
                Deactivate Account
              </Button>
            </div>
            <div className="flex p-2 rounded-xl cursor-pointer">
              <Button className="w-full bg-red-400 hover:bg-red-300">
                <Trash2Icon />
                Delete Account
              </Button>
            </div>
          </div>
        </div>

        <div className=" rounded-2xl p-8 overflow-scroll bg-background w-full text-justify">
          <ProfileContent activeTab={isActive} />
        </div>
      </div>
    </>
  );
}

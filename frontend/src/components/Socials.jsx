import React from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Camera,
  Edit,
  EditIcon,
  GlobeIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Socials() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="w-50 h-50 rounded-full"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Tooltip>
          <TooltipTrigger className="relative bottom-10 left-35 bg-secondary hover:cursor-pointer hover:bg-accent rounded-lg p-1 w-fit">
            <Camera />
          </TooltipTrigger>
          <TooltipContent>Edit Profile Pic</TooltipContent>
        </Tooltip>
      </div>
      <div className="flex items-center gap-1">
        <TwitterIcon />
        <Input placeholder="Twitter Url"></Input>
      </div>
      <div className="flex items-center gap-1">
        <InstagramIcon />
        <Input placeholder="Instagram Url"></Input>
      </div>
      <div className="flex items-center gap-1">
        <GlobeIcon />
        <Input placeholder="Personal Website"></Input>
      </div>
      <div className="flex items-center gap-1">
        <Button>
          <EditIcon /> Edit Socials
        </Button>
      </div>
    </div>
  );
}

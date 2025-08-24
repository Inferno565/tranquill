import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookmarkIcon, Heart, Send, Share2 } from "lucide-react";

export default function BlogDisplay({ image, title, blog }) {
  const [isFill, setisFill] = useState(false);

  const handleLike = () => {
    setisFill((prev) => !prev);
  };
  return (
    <>
      <AspectRatio ratio={2.76 / 1}>
        <img src={image} alt="Image" className="rounded-md w-full h-full" />
      </AspectRatio>
      <h1 className="text-4xl text-left">{title}</h1>
      <div className="flex flex-row gap-5 items-center">
        <Avatar className="w-10 h-10 border-black border-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>John Doe</p>
        <h2>|</h2>
        <p>Aug 23, 2025</p>
        <div className="flex flex-row gap-1 items-center hover:cursor-pointer">
          <Heart
            // className="hover:fill-red-600"
            onClick={handleLike}
            fill={isFill ? "red" : "none"}
          />
          <p className="text-sm">12</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <BookmarkIcon />
          <p className="text-sm"> 32</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <Share2 />
          <p className="text-sm"> 32</p>
        </div>{" "}
      </div>
      <div className="p-3 mr-0 text-justify">{blog}</div>
    </>
  );
}

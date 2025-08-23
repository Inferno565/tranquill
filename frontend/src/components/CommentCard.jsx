import React from "react";
import { AvatarFallback, Avatar, AvatarImage } from "./ui/avatar";

export default function CommentCard({ data, key }) {
  return (
    <>
      <div className="flex flex-row gap-5" key={key}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p>{data.username}</p>
          <p>{data.comment}</p>
        </div>
      </div>
    </>
  );
}

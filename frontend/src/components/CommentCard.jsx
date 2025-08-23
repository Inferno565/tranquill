import React from "react";
import { AvatarFallback, Avatar, AvatarImage } from "./ui/avatar";

export default function CommentCard() {
  return (
    <>
      <h3>Comments</h3>
      <div className="flex flex-row gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p>Username</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            similique dolor possimus molestias animi voluptatibus voluptatem
            autem, quia laboriosam modi suscipit magni nisi beatae pariatur
            facere aut nobis placeat hic!
          </p>
        </div>
      </div>
    </>
  );
}

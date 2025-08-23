import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookmarkIcon, Heart, Send, Share2 } from "lucide-react";
import CommentCard from "@/components/CommentCard";
import { Separator } from "@/components/ui/separator";

export default function BlogPage() {
  const [isFill, setisFill] = useState(false);

  const handleLike = () => {
    setisFill((prev) => !prev);
  };

  const commentSampleData = [
    {
      username: "John Doe",
      comment: "This is a very nice blog",
    },
    {
      username: "Steve Rogers",
      comment: "Very Good",
    },
    {
      username: "John Does Brother",
      comment: "Not good",
    },
  ];

  return (
    <>
      <main className="bg-muted">
        <div className="mr-auto ml-auto max-w-3xl p-4 space-y-3">
          <AspectRatio ratio={2.76 / 1}>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Image"
              className="rounded-md w-full h-full"
            />
          </AspectRatio>
          <h1 className="text-4xl text-left">Tranquill is tranquill</h1>
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
            </div>
          </div>
          <div className="p-3 mr-0 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse totam
            debitis dolorum mollitia? Distinctio, similique porro mollitia
            tempore id earum? Totam expedita autem aperiam voluptatum fuga,
            velit numquam dicta perspiciatis! Natus explicabo inventore corporis
            rerum. Similique veritatis consequuntur ducimus nisi, dolores
            maiores at dolor non esse illum quaerat nobis adipisci! Rem ea quam
            vitae quae culpa voluptate vel obcaecati quo. Placeat impedit, nisi
            nulla, eius molestias, dolore voluptatem odit excepturi dolorum
            labore deleniti sequi assumenda porro minus animi neque pariatur
            iusto repellendus eos sit nam. Tenetur dolorem beatae tempore totam.
            Impedit voluptates vitae odit ut a, suscipit facere. Fuga atque
            neque quas eveniet exercitationem magni distinctio inventore? Modi
            explicabo perspiciatis reprehenderit quidem accusantium porro,
            maxime, fugiat, numquam alias reiciendis consectetur? Mollitia aut
            animi natus temporibus eos rerum velit assumenda unde hic
            consequuntur fugit cumque veniam quisquam voluptate porro harum
            perspiciatis, maiores voluptatem consequatur in perferendis qui id
            quis! Quis, nobis.
          </div>
          <div>
            <h3 className="mb-3">Comments</h3>
            <div className="flex flex-col gap-1">
              {commentSampleData.map((content, index) => {
                return (
                  <>
                    <CommentCard key={index} data={content} />
                    <Separator className="my-4 bg-black" />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

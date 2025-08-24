import React, { useState } from "react";
import CommentCard from "@/components/CommentCard";
import { Separator } from "@/components/ui/separator";
import BlogDisplay from "./BlogDisplay";
import image1 from "@/assets/suiii.jpg";

export default function BlogPage() {

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

  const topic = "Tranquill is tranquill";
  const blogy =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus repellendus dolorem illum. Corrupti odio vero quisquam doloremque, similique ipsam veniam earum dicta delectus laudantium eum consequuntur sunt voluptates nisi.Nesciunt fuga sed nobis harum illum voluptatibus fugit suscipit qui nam cum praesentium debitis, et quisquam cumque hic officia dolorem quibusdam provident perferendis voluptas inventore, commodi rerum. Culpa, fugit consequatur.";

  return (
    <>
      <main className="bg-muted">
        <div className="mr-auto ml-auto max-w-3xl p-4 space-y-3">
          
          <BlogDisplay image={image1} title={topic} blog={blogy} />

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

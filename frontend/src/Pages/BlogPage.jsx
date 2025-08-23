import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BlogPage() {
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
          </div>
          <div className="p-3 mr-0 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse totam debitis dolorum mollitia? Distinctio, similique porro mollitia tempore id earum? Totam expedita autem aperiam voluptatum fuga, velit numquam dicta perspiciatis!
          Natus explicabo inventore corporis rerum. Similique veritatis consequuntur ducimus nisi, dolores maiores at dolor non esse illum quaerat nobis adipisci! Rem ea quam vitae quae culpa voluptate vel obcaecati quo.
          Placeat impedit, nisi nulla, eius molestias, dolore voluptatem odit excepturi dolorum labore deleniti sequi assumenda porro minus animi neque pariatur iusto repellendus eos sit nam. Tenetur dolorem beatae tempore totam.
          Impedit voluptates vitae odit ut a, suscipit facere. Fuga atque neque quas eveniet exercitationem magni distinctio inventore? Modi explicabo perspiciatis reprehenderit quidem accusantium porro, maxime, fugiat, numquam alias reiciendis consectetur?
          Mollitia aut animi natus temporibus eos rerum velit assumenda unde hic consequuntur fugit cumque veniam quisquam voluptate porro harum perspiciatis, maiores voluptatem consequatur in perferendis qui id quis! Quis, nobis.</div>
        </div>
      </main>
    </>
  );
}

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "../assets/Herobg.jpg"; // make sure it's a valid import
import { Button } from "./ui/button";
import { Bookmark, Heart, Send } from "lucide-react";

export default function BlogCard({ data, key }) {
  return (
    <Card className="w-full h-full rounded-none shadow-2xl">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.author}</CardDescription>
      </CardHeader>

      <CardContent className="p-4">
        <div
          className="w-full h-[250px] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${data.image})`,
          }}>
          <div className="bg-black/30 p-4 h-full flex flex-col justify-between">
            <div className="text-white font-semibold">{data.desc}</div>
            <Button className="w-fit text-black">Read </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-evenly gap-4 text-center">
          <div>
            <Heart />
            {data.likes}
          </div>
          <div>
            <Send />
            {data.shares}
          </div>
          <div>
            <Bookmark />
            {data.saves}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import placeHolder from "@/assets/placeholder.svg";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function ImageUpload() {
  const [image, setImage] = useState();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  return (
    <>
      <div className="w-full max-w-3xl mx-auto">
        <Card className="w-full shadow-2xl ">
          <CardHeader>
            <CardTitle>Upload Blog Image</CardTitle>
            <CardDescription>Image size max 50 kb</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={2.76 / 1}>
              <img
                src={image || placeHolder}
                alt="Image"
                className="rounded-md w-full h-full object-contain"
              />
            </AspectRatio>
          </CardContent>
          <CardFooter>
            <Button className="h-fit mx-auto bg-secondary rounded-2xl">
              <Input id="picture" type="file" onChange={handleUpload} />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

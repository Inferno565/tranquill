import React, { useState } from "react";
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
import { toast } from "sonner";
import { startsWith } from "zod";
export default function ImageUpload() {
  const [image, setImage] = useState();

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      toast.error("Please enter a valid image format");
      e.target.value = "";
      return;
    }

    // min file size to be changed
    if (file.size > 50 * 124) {
      toast.error("File size cannot exceed 50 KB");
      e.target.value = "";
      return;
    }

    if (!file) {
      toast.error("Error uploading file");
    }

    const url = URL.createObjectURL(file);
    setImage(url);
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

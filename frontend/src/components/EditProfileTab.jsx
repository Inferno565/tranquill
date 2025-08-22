import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Edit } from "lucide-react";
import EditProfileForm from "./EditProfileForm";
import Socials from "./Socials";

export default function EditProfileTab() {
  return (
    <>
      <div className="mr-auto ml-auto w-full">
        <Card>
          <CardHeader className="flex flex-row gap-6 items-center">
            <CardTitle>Personal Details</CardTitle>
            <CardDescription>
              <Button className="hover:cursor-pointer">
                <Edit />
                Edit
              </Button>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row gap-30 align-middl">
            <EditProfileForm />
            <Socials />
          </CardContent>
          <CardFooter>
            <p className="text-sm">Check Details Before Saving</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

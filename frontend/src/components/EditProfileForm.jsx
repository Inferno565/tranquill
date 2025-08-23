import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function EditProfileForm() {
  return (
    <>
      <div>
        <form autoComplete="off">
          <div className="grid w-fit items-center gap-3">
            <div className="flex flex-row space-x-5">
              <div className="flex flex-col gap-1.5">
                <Label>First Name</Label>
                <Input />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Last Name</Label>
                <Input />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-row justify-between">
                <Label>Bio</Label>
                <Label>Max length: 200 Characters</Label>
              </div>
              <Textarea maxlength="200" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label>Username</Label>
              <Input />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>E-mail Address</Label>
              <Input />
              {/* <div className="flex flex-row gap-2">
                <Checkbox id="publicMail" />
                <Label for="publicMail">Share Email Publicly</Label>
              </div>
              <p className="text-sm">
                *When you share, your mail will be visisble to others as contact
                information
              </p> */}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label>Password</Label>
              <Input type="password" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label>Confirm Password</Label>
              <Input type="password" />
            </div>

            <div className="flex flex-row w-fit gap-3">
              <Button type="submit" className="w-full text-accent-foreground">
                Save Changes
              </Button>

              <Button type="submit" className="w-full text-accent-foreground">
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

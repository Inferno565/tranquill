import React from "react";
import Image from "../assets/login.webp";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoginCard() {
  const [fields, setfields] = useState({ username: "", password: "" });

  const handlesubmit = (evt) => {
    evt.preventDefault();
    setTimeout(() => {
      console.log({ fields });
    }, 2000);
  };

  const handleChange = (evt) => {
    const fieldChanged = evt.target.name;
    const newValue = evt.target.value;
    // console.log(newValue);
    setfields((currValue) => {
      currValue[fieldChanged] = newValue;
      return { ...currValue };
    });
  };
  return (
    <>
      <Card className="w-[350px] md:w-[400px] md:h-fit shadow-2xl ">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Some phrase</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input
                  // id="name"
                  placeholder="abc123@example.com"
                  value={fields.username}
                  onChange={handleChange}
                  name="username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  // id="password"
                  placeholder="Enter Your Password"
                  type="password"
                  value={fields.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>
              <Button
                className=" w-full text-accent-foreground"
                onClick={handlesubmit}>
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className=" w-full text-accent-foreground">
            <span className="w-6 h-6">
              <img
                src="src\assets\Google.png"
                alt=""
                className="mix-blend-multiply"
              />
            </span>
            Continue with Google
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

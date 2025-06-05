import React, { useState } from "react";
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

export default function SignUpCard() {
  const [data, setdata] = useState({ name: "", username: "", password: "" });

  const handleChange = (evt) => {
    const field = evt.target.name;
    const newValue = evt.target.value;
    setdata((currValue) => {
      //   console.log(currValue);
      currValue[field] = newValue;
      return { ...currValue };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Form Submitted");
    console.log(data);
  };

  return (
    <>
      <Card className="w-[350px] md:w-[400px] md:h-fit shadow-2xl ">
        <CardHeader>
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>Some phrase</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Enter your name</Label>
                <Input
                  name="name"
                  placeholder="John Doe"
                  required
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Enter your e-mail</Label>
                <Input
                  name="username"
                  placeholder="abc123@example.com"
                  required
                  value={data.username}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  placeholder="Min 8 char, with atleast 1 uppercase"
                  type="password"
                  required
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Confirm Password</Label>
                <Input
                 name="password"
                  placeholder="Enter Your Password"
                  type="password"
                />
              </div> */}
              <Button type="submit" className=" w-full text-accent-foreground">
                Sign Up
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
            Register with Google
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

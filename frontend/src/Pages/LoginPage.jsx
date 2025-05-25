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
export default function LoginPage() {
  return (
    <>
      <main
        className="min-h-screen bg-no-repeat bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url(" + Image + ")",
        }}>
        <Card className="w-[350px] md:w-[400px] md:h-[400px] bg-transparent shadow-2xl ">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Some phrase</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username</Label>
                  <Input id="name" placeholder="abc123@example.com" className="focus:bg-accent border-black"/>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="Enter Your Password" className="focus:bg-accent border-black" type="password"/>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className=" w-full bg-accent text-accent-foreground">Login</Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}

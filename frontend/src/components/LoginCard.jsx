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
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { EyeIcon, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const result = await res.json();
    const message = result.message;
    if (!res.ok) {
      toast.error(message);
    } else {
      //temp code to be removed
      sessionStorage.setItem("user", result.user_id);
      //
      toast.success(message);
      navigate("/");
    }
  };

  const toggleVisiblity = () => {
    setisPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <Card className="w-[350px] md:w-[400px] md:h-fit shadow-2xl ">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Some phrase</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            method="POST">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input
                  {...register("username", {
                    required: "Please enter username",
                  })}
                  placeholder="abc123@example.com"
                />
                <p className="text-red-600">{errors.username?.message}</p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="border-1 rounded-md flex items-center ">
                  <Input
                    className={"border-0"}
                    {...register("password", {
                      required: "Please enter password",
                    })}
                    placeholder="Enter Your Password"
                    type={isPasswordVisible ? "text" : "password"}
                  />
                  <Button
                    type="button"
                    onClick={toggleVisiblity}
                    className={"text-foreground"}>
                    {isPasswordVisible ? <EyeIcon /> : <EyeOff />}
                  </Button>
                </div>
                <p className="text-red-600">{errors.password?.message}</p>
              </div>
              <Button className=" w-full text-accent-foreground">Login</Button>
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

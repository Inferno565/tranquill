import React, { useState } from "react";
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
import { useForm } from "react-hook-form";

export default function SignUpCard() {
  // const [data, setdata] = useState({ name: "", username: "", password: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
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
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="grid w-full items-center gap-2.5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Enter your name</Label>
                <div className="flex flex-row gap-1.5">
                  <div>
                    <Input
                      // name="name"
                      {...register("firstname", { required: "Required Field" })}
                      placeholder="John"
                    />
                    <p className="text-red-600 text-xs">
                      {errors.firstname?.message}
                    </p>
                  </div>
                  <div>
                    {" "}
                    <Input
                      // name="name"
                      {...register("lastname", { required: "Required Field" })}
                      placeholder="Doe"
                    />
                    <p className="text-red-600 text-xs">
                      {errors.lastname?.message}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Enter your e-mail</Label>
                <Input
                  placeholder="abc123@example.com"
                  {...register("email", {
                    required: "Please enter your email",
                  })}
                />
              </div>
              <p className="text-red-600 text-xs">{errors.email?.message}</p>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  placeholder="Min 8 char, with at least 1 uppercase char"
                  type="password"
                  {...register("password", {
                    required: "Please enter password",
                  })}
                />
              </div>
              <p className="text-red-600 text-xs">{errors.password?.message}</p>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cPassword">Confirm Password</Label>
                <Input
                  name="cPassword"
                  placeholder="Confirm Password"
                  type="password"
                  {...register("cPassword", {
                    required: "Please confirm Password",
                  })}
                />
              </div>
              <p className="text-red-600 text-xs">
                {errors.cPassword?.message}
              </p>
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
            Continue with Google
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

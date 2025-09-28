import React, { useContext, useState } from "react";
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
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOff } from "lucide-react";
import { AuthContext } from "@/Context/AuthContext";

export default function SignUpCard() {
  const { dispatch } = useContext(AuthContext);

  const [isPasswordVisible, setisPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const password = watch("password", "");

  const toggleVisiblity = () => {
    setisPasswordVisible((prev) => !prev);
  };

  const onsubmit = async (data) => {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const result = await res.json();
    if (!res.ok) {
      if (Array.isArray(result.errors)) {
        result.errors.forEach((msg) => {
          toast.error(msg);
        });
      } else {
        const message = result.message;
        toast.error(message);
      }
    } else {
      navigate("/");
      
      // start of temp code
      localStorage.setItem("user", result.user_id);
      localStorage.setItem("auth", result.token);
      dispatch({
        type: "signup",
        payload: { user: result.user_id, token: result.token },
      });
      // eo temp code
    }
  };

  return (
    <>
      <Card className="w-[350px] md:w-[400px] md:h-fit shadow-2xl ">
        <CardHeader>
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>Some phrase</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onsubmit)} autoComplete="off">
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
                <Label htmlFor="email">Enter your e-mail</Label>
                <Input
                  placeholder="abc123@example.com"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[\w.-]+@([\w-]+\.)+[A-Za-z]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
              </div>
              <p className="text-red-600 text-xs">{errors.email?.message}</p>

              {/* <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Enter a username</Label>
                <Input
                  placeholder="John_writes"
                  {...register("username", {
                    // required: "Please enter a username",
                  })}
                />
              </div>
              <p className="text-red-600 text-xs">{errors.username?.message}</p> */}

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="border-1 rounded-md flex items-center ">
                  <Input
                    placeholder="Min 6 char, with at least 1 uppercase char"
                    type={isPasswordVisible ? "text" : "password"}
                    {...register("password", {
                      required: "Please enter password",
                      pattern: {
                        value: /^(?=.*[A-Z]).{6,}$/,
                        message:
                          "Password must have min 6 chars with atleast 1 uppercase letter",
                      },
                    })}
                  />
                  <Button
                    type="button"
                    onClick={toggleVisiblity}
                    className={"text-foreground"}>
                    {isPasswordVisible ? <EyeIcon /> : <EyeOff />}
                  </Button>
                </div>
              </div>
              <p className="text-red-600 text-xs">{errors.password?.message}</p>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cPassword">Confirm Password</Label>
                <div className="border-1 rounded-md flex items-center ">
                  <Input
                    name="cPassword"
                    placeholder="Confirm Password"
                    type="password"
                    // type={isPasswordVisible ? "text" : "password"}
                    {...register("cPassword", {
                      required: "Please confirm Password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  {/* <Button
                    type="button"
                    onClick={toggleVisiblity}
                    className={"text-foreground"}>
                    {isPasswordVisible ? <EyeIcon /> : <EyeOff />}
                  </Button> */}
                </div>
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

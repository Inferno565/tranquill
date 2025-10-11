import { React, useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function EditProfileForm() {
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
  } = useForm();

  const curr_user = localStorage.getItem("user");

  const getUserData = async (user_id) => {
    const result = await fetch("http://localhost:5000/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: user_id }),
      credentials: "include",
    });
    const res = await result.json();
    const message = res.message;
    if (!result.ok) {
      toast.error(message);
    } else {
      // console.log("toast fired");
      // toast.success("chal rha hai");
      reset(res.user);
    }
  };

  useEffect(() => {
    getUserData(curr_user);
  }, []);

  useEffect(() => {
    const beforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", beforeUnload);
    return () => window.removeEventListener("beforeunload", beforeUnload);
  }, [isDirty]);

  const onSubmit = (data) => {
    console.log(data);
    data.username = "worked";
    toast.success("Profile Updated");
    reset(data);
  };

  const handleReset = () => {
    console.log("chal rha");
  };

  return (
    <>
      <div>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-fit items-center gap-3">
            <div className="flex flex-row space-x-5">
              <div className="flex flex-col gap-1.5">
                <Label>First Name</Label>
                <Input {...register("firstname")} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Last Name</Label>
                <Input {...register("lastname")} />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-row justify-between">
                <Label>Bio</Label>
                <Label>Max length: 200 Characters</Label>
              </div>
              <Textarea maxLength="200" {...register("bio")} />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label>Username</Label>
              <Input {...register("username")} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>E-mail Address</Label>
              <Input {...register("email")} />

              {/* <div className="flex flex-row gap-2">
                <Checkbox id="publicMail" />
                <Label for="publicMail">Share Email Publicly</Label>
              </div>
              <p className="text-sm">
                *When you share, your mail will be visisble to others as contact
                information
              </p> */}
            </div>

            <div className="flex flex-row w-fit gap-3">
              <Button type="submit" className="w-full text-accent-foreground">
                Save Changes
              </Button>

              <Button
                type="button"
                onClick={handleReset}
                className="w-full text-accent-foreground">
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/ui/logo";
import { useAuth } from "@/providers/AuthProvider";
import { loginApi, registerApi } from "@/services/auth";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password dan Confirm Password tidak sama!");
      return;
    }

    try {
      const apiFormData = new FormData();
      apiFormData.append("name", formData.name);
      apiFormData.append("email", formData.email);
      apiFormData.append("password", formData.password);
      apiFormData.append(
        "avatarUrl",
        "https://res.cloudinary.com/dvz5kmwqx/image/upload/v1759557923/products/uwxwmwq3y0drl7u9vvpv.png"
      );

      await registerApi(apiFormData);
      const loginResponse = await loginApi(formData.email, formData.password);

      login(loginResponse.token, loginResponse.user);
      window.location.href = "/";
      /* eslint-disable  @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      alert("Gagal register atau login: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-6 bg-accent">
      <Card className="w-full max-w-md gap-4">
        <CardHeader>
          <Logo className="h-10.5"></Logo>
          <CardTitle className="text-2xl leading-9 font-bold pt-3">
            Register
          </CardTitle>
          <CardDescription className="leading-7">
            Just a few steps away from your next favorite purchase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 ">
              <Input
                className=" h-11.5"
                id="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                className=" h-11.5"
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                className=" h-11.5"
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Input
                className=" h-11.5"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {/* upload file */}

            <div>
              <p className="font-normal mt-4 mb-2 text-muted-foreground text-sm">
                Upload Profile Picture:
              </p>
              <Input
                className="h-11.5 mb-1.5 py-2 text-md font-xl text-neutral-600"
                id="picture"
                type="file"
                required
              />
            </div>

            <Button type="submit" className="w-full mt-5 h-11.5">
              Submit
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div className="flex">
            <p className="text-sm pt-1">Already have an account?</p>
            <CardAction className="">
              <Button className="px-2 pt-0 font-bold" variant="link">
                <Link href="/login"> Login </Link>
              </Button>
            </CardAction>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

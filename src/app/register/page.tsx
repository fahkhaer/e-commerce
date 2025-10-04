//isinya ada di-ss
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
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // number input validation, 0-9
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setValue(onlyNumbers);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Logo className="h-10.5"></Logo>
          <CardTitle className="text-2xl leading-9 font-bold pt-6">
            Register
          </CardTitle>
          <CardDescription className="leading-7">
            Just a few steps away from your next favorite purchase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <Input id="name" type="text" placeholder="Name" required></Input>
              <Input
                id="number-phone"
                type="text"
                placeholder="Number Phone"
                value={value}
                onChange={handleChange}
                inputMode="numeric"
                required
              ></Input>
              <Input id="email" type="email" placeholder="Email" required />
              <Input
                id="password"
                type="password"
                placeholder="Password"
                required
              />
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Submit
          </Button>
          <div className="flex">
            <p className="text-sm pt-1">Already have an account?</p>
            <CardAction className="">
              <Button className="px-2 pt-0" variant="link">
                <Link href="/login"> Login </Link>
              </Button>
            </CardAction>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

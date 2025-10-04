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

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Logo className="h-10.5"></Logo>
          <CardTitle className="text-2xl leading-9 font-bold pt-6">
            Login
          </CardTitle>
          <CardDescription className="leading-7">
            Access your account and start shopping in seconds{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <Input id="email" type="email" placeholder="Email" required />
              <Input
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button asChild type="submit" className="w-full">
            <Link href="/before-open-store"> Login</Link> 
          </Button>
          <div className="flex">
            <p className="text-sm pt-1">Don&apos;t have an account?</p>
            <CardAction className="">
              <Button className="px-2 pt-0" variant="link">
                <Link href="/register"> Register</Link>
              </Button>
            </CardAction>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

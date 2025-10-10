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
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { useAuth } from "@/providers/AuthProvider";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput, loginSchema } from "@/schema/auth.schema";
import { loginApi } from "@/services/auth";

export default function LoginPage() {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      const result = await loginApi(data.email, data.password);
      login(result.token, result.user);
      window.location.href = "/";
      /* eslint-disable  @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      alert(error.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-6 bg-accent">
      <Card className="w-full max-w-md gap-0 pb-3">
        <CardHeader>
          <Logo className="h-10.5"></Logo>
          <CardTitle className="text-2xl leading-9 font-bold pt-4">
            Login
          </CardTitle>
          <CardDescription className="leading-7 pb-5">
            Access your account and start shopping in seconds{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-4">
              <Input
                {...register("email")}
                className="h-14"
                type="email"
                placeholder="Email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <Input
                {...register("password")}
                className="h-14 mb-1.5"
                type="password"
                placeholder="Password"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col mt-3">
          <div className="flex">
            <p className="text-sm pt-1">Don&apos;t have an account?</p>
            <CardAction>
              <Button className="px-2 pt-0 font-bold" variant="link">
                <Link href="/register"> Register</Link>
              </Button>
            </CardAction>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

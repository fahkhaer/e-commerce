"use client";

import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import { Command, CommandInput } from "../ui/command";
import { LayoutGrid, SearchIcon, ShoppingCart, Store } from "lucide-react";
import { Logo } from "../ui/logo";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";
import { HamburgerBuyer } from "../ui/HamburgerBuyer";
import Image from "next/image";
import { HamburgerGuest } from "../ui/HamburgerGuest";

const GuestNav = () => {
  return (
    <div className="flex gap-3 items-center  ">
      <Link href="/login">
        <ShoppingCart className="shrink-0 " />
      </Link>
      <div className="gap-3 items-center hidden md:block">
        <Link
          href="/login"
          className={`${buttonVariants({ variant: "outline" })} md:w-36`}
        >
          Login
        </Link>

        <Link
          href="/register"
          className={`${buttonVariants({ variant: "default" })} ml-3 md:w-36`}
        >
          Register
        </Link>
      </div>
      <HamburgerGuest />
    </div>
  );
};

const LoginNav = () => {
  return (
    <div className="flex gap-3 md:pl-10 items-baseline">
      <Button
        variant="outline"
        className="hidden md:block w-fit rounded-full h-11 text-sm font-bold ml-4 bg-white border"
      >
        <Link
          href="/open-store"
          className="flex items-center gap-2 leading-none"
        >
          <Store className="size-5 fill " />
          Open Store
        </Link>
      </Button>
      <Link href="/cart-page">
        <ShoppingCart className="shrink-0" />
      </Link>
      <HamburgerBuyer />

      <Button
        variant="outline"
        className="hidden md:block w-fit rounded-full h-11 text-sm font-bold my-auto py-2 px-3 gap-2 bg-white border"
      >
        <Link href="/buyer-home" className=" flex items-center gap-2 ">
          <Avatar>
            <AvatarImage
              className="rounded-full h-8"
              src="https://github.com/shadcn.png"
            />
          </Avatar>
          John Doe
        </Link>
      </Button>
    </div>
  );
};

export default function Navbar() {
  const [token, setToken] = useState<string | null>();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  return (
    <nav className="shadow-[0_0_20px_0_#CBCACA40] grid grid-cols-[auto_minmax(8px,1fr)_auto_auto]  h-21 px-5 md:px-30 items-center gap-3">
      <Link href="/">
        <Logo className="hidden md:block" />
        <Image
          src="/logomobile.png"
          alt="logo-mobile"
          width={32}
          height={32}
          className="md:hidden"
          priority
        />
      </Link>

      <div className="flex gap-3">
        <Badge
          className="radius-xl text-sm h-11 hover:bg-accent md:ml-20"
          variant="outline"
        >
          <Link
            href="./catalog-page"
            className="flex items-center gap-1.5 px-2 font-normal text-sm"
          >
            <LayoutGrid />
            <p className="hidden md:block"> Catalog</p>
          </Link>
        </Badge>
        <Command className=" flex items-start gap-1.5 h-11 px-4 rounded-lg border radius-xl w-full">
          <SearchIcon className="size-4 opacity-50" />
          <CommandInput
            className="h-fit focus:outline-none"
            placeholder="Search..."
          />
        </Command>
      </div>

      {token ? <LoginNav /> : <GuestNav />}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import { Command, CommandInput } from "../ui/command";
import { LayoutGrid, SearchIcon, ShoppingCart } from "lucide-react";
import { Logo } from "../ui/logo";

export default function NavbarGuest() {
  return (
    <nav className="shadow-[0_0_20px_0_#CBCACA40] grid grid-cols-[auto_minmax(8px,1fr)_auto_auto]  h-21 md:px-30 items-center gap-3">
      <Logo />
      <div className="flex gap-3">
        <Badge
          className="radius-xl text-sm h-11 hover:bg-accent ml-20"
          variant="outline"
        >
          {" "}
          <Link
            href="/category"
            className="flex items-center gap-1.5 px-2 font-normal text-sm"
          >
            <LayoutGrid />
            Category
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

      <ShoppingCart className="shrink-0" />

      <div className="flex gap-3 items-baseline">
        <Link
          href="/login"
          className={`${buttonVariants({ variant: "outline" })} md:w-36`}
        >
          Login
        </Link>

        <Link
          href="/register"
          className={`${buttonVariants({ variant: "default" })} md:w-36`}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

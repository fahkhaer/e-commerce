"use client";

import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Command, CommandInput } from "../ui/command";
import { LayoutGrid, SearchIcon, ShoppingCart, Store } from "lucide-react";
import { Logo } from "../ui/logo";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function NavbarLoginUser() {
  return (
    <nav className="shadow-[0_0_20px_0_#CBCACA40] grid grid-cols-[auto_minmax(8px,1fr)_auto_auto]  h-21 md:px-30 items-center gap-3">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-3">
        <Badge
          className="radius-xl text-sm h-11 hover:bg-accent ml-20"
          variant="outline"
        >
          {" "}
          <Link
            href="/catalog-page"
            className="flex items-center gap-1.5 px-2 font-normal text-sm"
          >
            <LayoutGrid />
            Catalog
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

      <div className="flex gap-3 pl-10 items-baseline">
        <Link href="/cart-page">
          <ShoppingCart className="shrink-0" />
        </Link>{" "}
        <Button
          variant="outline"
          className="w-fit rounded-full h-11 text-sm font-bold ml-4 bg-white border"
        >
          <Link href="/open-store" className="flex items-center  gap-2 leading-none">
            <Store className="size-5 fill " />
            Open Store
          </Link>
        </Button>
        <Button
          variant="outline"
          className="w-fit rounded-full h-11 text-sm font-bold my-auto py-2 px-3 gap-2 bg-white border"
        >
          <Link href="#" className="flex items-center gap-2 ">
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
    </nav>
  );
}

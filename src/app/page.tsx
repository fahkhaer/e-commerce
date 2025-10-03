import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { Toggle } from "@radix-ui/react-toggle";
import { Command, CommandInput } from "cmdk";
import { link } from "fs";
import { LayoutGrid, SearchIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="grid grid-cols-[auto_minmax(8px,1fr)_auto_auto]  h-21 md:px-30 items-center gap-3">
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
          <Command className="flex items-center gap-1.5 h-11 px-4 rounded-lg border radius-xl w-full">
            <SearchIcon className="size-4  opacity-50" />
            <CommandInput
              className=" h-fit py-3 focus:outline-none "
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
      <div className="font-sans relative flex flex-col md:py-10 md:px-30 pb-20 gap-16 sm:px-4">
        <main className="max-w-[1200px] mx-auto">
          <img src="Hero.png" alt="" />
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>{" "}
    </>
  );
}

import Catalog from "@/components/layouts/Catalog";
import MainLayout from "@/components/layouts/MainLayout";
import NavbarGuest from "@/components/layouts/NavbarGuest";
import Navbar from "@/components/layouts/NavbarGuest";
import NavbarLoginUser from "@/components/layouts/NavbarLoginUser";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroImage from "@/components/ui/hero";
import { Logo } from "@/components/ui/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Toggle } from "@radix-ui/react-toggle";
import { Command, CommandInput } from "cmdk";
import { link } from "fs";
import {
  BadgeCheck,
  LayoutGrid,
  LinkIcon,
  SearchIcon,
  ShoppingCart,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavbarGuest></NavbarGuest>
      <MainLayout>
        <HeroImage />

        <div className="w-full mt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-950">
            Featured Product
          </h2>
        </div>

        {/* grid daftar produk */}
        <Catalog></Catalog>
      </MainLayout>

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
    </>
  );
}

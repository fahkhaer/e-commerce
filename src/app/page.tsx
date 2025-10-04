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
    </>
  );
}

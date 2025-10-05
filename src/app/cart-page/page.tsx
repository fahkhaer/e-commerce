"use client";

import MainLayout from "@/components/layouts/MainLayout";
import NavbarLoginUser from "@/components/layouts/NavbarLoginUser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { StoreIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  return (
    <>
      <NavbarLoginUser />
      <MainLayout>
        <section className="mx-auto md:grid grid-cols-[7fr_3fr] w-full gap-6">
          {/* first column */}
          <section className="w-full mx-auto">
            <h1 className="font-bold text-3xl md:text-[32px] leading-9 md:leading-[42px] pb-8 px-4 md:px-0">
              Cart
            </h1>
            <p>
              {/* ❗️posisi checkbox harusnya diatas ❗️model checkbox didalam Card
              samain kayak "Select All" */}
            </p>
            {/* put select all here */}
            {/* <CheckboxAll
              items={[]}
              onChange={handleCheckedItems}
            /> */}
            <div className="flex items-center gap-3 pb-8">
              <Checkbox id="all" />
              <Label htmlFor="all">Select All</Label>
            </div>
            {/* product choosen start here */}
            {/* two items purchased */}
            <Card className="p-0 shadow-none">
              <CardContent className="p-0">
                {/* seller */}
                <div className="flex items-center gap-1.5 p-3">
                  <Checkbox />
                  <StoreIcon className="ml-1.5" />
                  <Label className="font-semibold leading-4 ">
                    Toko Abdi Fashion
                  </Label>
                </div>
                {/* first item purchased */}
                <Label className="hover:bg-accent/50 flex justify-between gap-3 p-3 has-[[aria-checked=true]]:border- has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950 ">
                  <div className="flex items-center gap-3 ">
                    <Checkbox
                      id="toggle-2"
                      defaultChecked
                      className="data-[state=checked]:border- data-[state=checked]:bg- data-[state=checked]:text-black dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                    />
                    <Image
                      src="/productexample.png"
                      alt="sneakers-court-minimalist"
                      width={80}
                      height={80}
                      className="rounded-xl"
                      priority
                    />
                    <div className="grid gap-1.5 font-normal">
                      <p className="text-sm leading-none font-medium">
                        Sneakers Court Minimalis
                      </p>
                      <p className="text-muted-foreground text-sm">Shoes </p>
                    </div>
                  </div>

                  {/* price and amount of item checked out */}
                  <div className="flex flex-row gap-4 justify-between md:flex md:flex-col">
                    <h2 className="md:leading-5 font-bold text-sm md:text-xl text-[#0A0D12] pl-10 md:pl-0 py-3 md:py-0 pt-5 md:pt-0 md:text-right">
                      Rp 275.000
                    </h2>
                    <div className="flex items-center gap-4">
                      <Trash2 />
                      <div className="flex items-center border border-neutral-300 rounded-xl p-1 w-fit">
                        {/* <!-- Tombol Minus --> */}
                        <button className="text-xl font-bold px-2 cursor-pointer">
                          -
                        </button>

                        {/* <!-- Angka --> */}
                        <span className="mx-4 text-xl font-medium">2</span>

                        {/* <!-- Tombol Plus --> */}
                        <button className="text-xl font-bold px-2 cursor-pointer">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </Label>
                <hr className="mx-3" />
                {/* second item purchased   */}
                <Label className="hover:bg-accent/50 flex justify-between gap-3 p-3 has-[[aria-checked=true]]:border- has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950 ">
                  <div className="flex items-center gap-3 ">
                    <Checkbox
                      id="toggle-2"
                      defaultChecked
                      className="data-[state=checked]:border- data-[state=checked]:bg- data-[state=checked]:text-black dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                    />
                    <Image
                      src="/productexample.png"
                      alt="sneakers-court-minimalist"
                      width={80}
                      height={80}
                      className="rounded-xl"
                      priority
                    />
                    <div className="grid gap-1.5 font-normal">
                      <p className="text-sm leading-none font-medium">
                        Sneakers Court Minimalis
                      </p>
                      <p className="text-muted-foreground text-sm">Shoes </p>
                    </div>
                  </div>

                  {/* price and amount of item checked out */}
                  <div className="flex flex-row gap-4 justify-between md:flex md:flex-col">
                    <h2 className="md:leading-5 font-bold text-sm md:text-xl text-[#0A0D12] pl-10 md:pl-0 py-3 md:py-0 pt-5 md:pt-0 md:text-right">
                      Rp 275.000
                    </h2>
                    <div className="flex items-center gap-4">
                      <Trash2 />
                      <div className="flex items-center border border-neutral-300 rounded-xl p-1 w-fit">
                        {/* <!-- Tombol Minus --> */}
                        <button className="text-xl font-bold px-2 cursor-pointer">
                          -
                        </button>

                        {/* <!-- Angka --> */}
                        <span className="mx-4 text-xl font-medium">2</span>

                        {/* <!-- Tombol Plus --> */}
                        <button className="text-xl font-bold px-2 cursor-pointer">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </Label>
              </CardContent>
            </Card>
            <br />
            {/* one item purchased */}
            <Card className="p-0 shadow-none">
              <CardContent className="p-0">
                {/* seller */}
                <div className="flex items-center gap-1.5 p-3">
                  <Checkbox />
                  <StoreIcon className="ml-1.5" />
                  <Label className="font-semibold leading-4 ">
                    Toko Abdi Fashion
                  </Label>
                </div>
                {/* item purchased */}
                <Label className="hover:bg-accent/50 flex justify-between gap-3 p-3 has-[[aria-checked=true]]:border- has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950 ">
                  <div className="flex items-center gap-3 ">
                    <Checkbox
                      id=""
                      defaultChecked
                      className="data-[state=checked]:border- data-[state=checked]:bg- data-[state=checked]:text-black dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                    />
                    <Image
                      src="/productexample.png"
                      alt="sneakers-court-minimalist"
                      width={80}
                      height={80}
                      className="rounded-xl"
                      priority
                    />
                    <div className="grid gap-1.5 font-normal">
                      <p className="text-sm leading-none font-medium">
                        Sneakers Court Minimalis
                      </p>
                      <p className="text-muted-foreground text-sm">Shoes </p>
                    </div>
                  </div>

                  {/* price and amount of item checked out */}
                  <div className="flex flex-row gap-4 justify-between md:flex md:flex-col">
                    <h2 className="md:leading-5 font-bold text-sm md:text-xl text-[#0A0D12] pl-10 md:pl-0 py-3 md:py-0 pt-5 md:pt-0 md:text-right">
                      Rp 275.000
                    </h2>
                    <div className="flex items-center gap-4">
                      <Trash2 />
                      <div className="flex items-center border border-neutral-300 rounded-xl p-1 w-fit">
                        {/* <!-- Tombol Minus --> */}
                        <button className="text-xl font-bold px-2 cursor-pointer">
                          -
                        </button>

                        {/* <!-- Angka --> */}
                        <span className="mx-4 text-xl font-medium">2</span>

                        {/* <!-- Tombol Plus --> */}
                        <button className="text-xl font-bold px-2 cursor-pointer">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </Label>
              </CardContent>
            </Card>
          </section>
          {/* second column */}
          <section className="px-4 md:px-0">
            <section className="h-fit w-full rounded-xl ] bg-white shadow-[0px_0px_20px_0px_#CBCACA40] gap-4 py-5 px-5 mt-10 md:mt-0">
              <h2 className="text-left md:leading-8 font-bold text-lg text-[#0A0D12] pt-3">
                Total Shopping
              </h2>
              <div className="flex justify-between gap-2 py-2">
                <h2 className="text-left md:leading-8 font-normal text-base py-3">
                  Total
                </h2>
                <h2 className="text-right md:leading-8 font-bold text-base py-3">
                  Rp275.000
                </h2>
              </div>
              <Link href="/checkout-page">
                <Button className="w-full h-12">Checkout</Button>
              </Link>
            </section>
          </section>
        </section>
      </MainLayout>
    </>
  );
}

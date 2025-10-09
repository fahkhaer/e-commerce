"use client";

import MainLayout from "@/components/layouts/MainLayout";
import Navbar from "@/components/layouts/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getCart } from "@/services/cart";
import { CartResponse } from "@/types/product.interface";
import { useQuery } from "@tanstack/react-query";
import { StoreIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const { data, isLoading, error } = useQuery<CartResponse, Error>({
    queryKey: ["cart"],
    queryFn: getCart,
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });

  if (isLoading) return <div>Loading cart...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

  return (
    <>
      <Navbar />
      <MainLayout>
        <section className="mx-auto md:grid grid-cols-[7fr_3fr] w-full gap-6">
          {/* first column */}
          <section className="w-full mx-auto">
            <h1 className="font-bold text-3xl md:text-[32px] leading-9 md:leading-[42px] md:pt-0 pt-6 pb-6  md:px-0">
              Cart
            </h1>
            <div className="flex items-center text-md font-medium gap-3 pb-5">
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
                <Label className="hover:bg-accent/50 flex flex-col md:flex-row md:justify-between items-start gap-3 my-1 md:my-4 px-3 pb-2.5 md:py-3 rounded-lg has-[[aria-checked=true]]:border has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                  {/* Kiri: checkbox + gambar + teks */}
                  <div className="flex gap-3 md:pt-0 pt-2.5">
                    {/* Checkbox di atas */}
                    <div className="flex flex-col justify-start">
                      <Checkbox />
                    </div>

                    {/* Image dan text */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="/productexample.png"
                        alt="sneakers-court-minimalist"
                        width={80}
                        height={80}
                        className="rounded-xl"
                        priority
                      />
                      <div className="grid gap-1.5 font-normal">
                        <p className="text-sm md:text-base leading-none font-medium">
                          Hoodie Pullover Fleece
                        </p>
                        <p className="text-muted-foreground text-sm">Jacket</p>
                      </div>
                    </div>
                  </div>

                  {/* Kanan: harga + jumlah */}
                  <div className="flex flex-row justify-between items-center md:flex-col md:justify-between md:items-end w-full md:w-auto pl-7 md:pl-0 mt-1 md:mt-0">
                    {/* Harga */}
                    <h2 className="font-bold text-base md:text-xl text-[#0A0D12] mb-0 md:mb-3 text-left md:text-right">
                      Rp275.000
                    </h2>

                    {/* Trash + tombol jumlah */}
                    <div className="flex items-center justify-end md:justify-between gap-4 w-full md:w-auto">
                      <Trash2 className="text-neutral-500" />
                      <div className="flex justify-center items-center border border-neutral-300 rounded-xl py-1.5 px-2 w-24 md:px-3 md:py-2 h-11 md:w-fit">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-lg font-bold px-0 md:px-2"
                          onClick={handleDecrease}
                        >
                          −
                        </Button>
                        <span className="mx-4 text-lg font-medium">
                          {quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-lg font-bold px-0 md:px-2"
                          onClick={handleIncrease}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </Label>
                <hr className="mx-3" />
                {/* second item purchased   */}
                <Label className="hover:bg-accent/50 flex flex-col md:flex-row md:justify-between items-start gap-3 my-1 md:my-4 px-3 pb-2.5 md:py-3 rounded-lg has-[[aria-checked=true]]:border has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                  {/* Kiri: checkbox + gambar + teks */}
                  <div className="flex gap-3 md:pt-0 pt-2.5">
                    {/* Checkbox di atas */}
                    <div className="flex flex-col justify-start">
                      <Checkbox />
                    </div>

                    {/* Image dan text */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="/productexample.png"
                        alt="sneakers-court-minimalist"
                        width={80}
                        height={80}
                        className="rounded-xl"
                        priority
                      />
                      <div className="grid gap-1.5 font-normal">
                        <p className="text-sm md:text-base leading-none font-medium">
                          Hoodie Pullover Fleece
                        </p>
                        <p className="text-muted-foreground text-sm">Jacket</p>
                      </div>
                    </div>
                  </div>

                  {/* Kanan: harga + jumlah */}
                  <div className="flex flex-row justify-between items-center md:flex-col md:justify-between md:items-end w-full md:w-auto pl-7 md:pl-0 mt-1 md:mt-0">
                    {/* Harga */}
                    <h2 className="font-bold text-base md:text-xl text-[#0A0D12] mb-0 md:mb-3 text-left md:text-right">
                      Rp275.000
                    </h2>

                    {/* Trash + tombol jumlah */}
                    <div className="flex items-center justify-end md:justify-between gap-4 w-full md:w-auto">
                      <Trash2 className="text-neutral-500" />
                      <div className="flex justify-center items-center border border-neutral-300 rounded-xl py-1.5 px-2 w-24 md:px-3 md:py-2 h-11 md:w-fit">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-lg font-bold px-0 md:px-2"
                          onClick={handleDecrease}
                        >
                          −
                        </Button>
                        <span className="mx-4 text-lg font-medium">
                          {quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-lg font-bold px-0 md:px-2"
                          onClick={handleIncrease}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </Label>
              </CardContent>
            </Card>
            <br />
            {/* one item purchased */}
            <Card className="p-0 shadow-none items-start">
              <CardContent className="p-0 w-full">
                {/* Seller */}
                <div className="flex items-center gap-1.5 p-3">
                  <Checkbox />
                  <StoreIcon className="ml-1.5" />
                  <Label className="font-semibold leading-4">
                    Toko Abdi Fashion
                  </Label>
                </div>

                {/* Item purchased */}
                {/* mobile */}
                <Label className="hover:bg-accent/50 flex flex-col md:flex-row md:justify-between items-start gap-3 my-1 md:my-4 px-3 pb-2.5 md:py-3 rounded-lg has-[[aria-checked=true]]:border has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                  {/* Kiri: checkbox + gambar + teks */}
                  <div className="flex gap-3">
                    {/* Checkbox di atas */}
                    <div className="flex flex-col justify-start">
                      <Checkbox />
                    </div>

                    {/* Image dan text */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="/productexample.png"
                        alt="sneakers-court-minimalist"
                        width={80}
                        height={80}
                        className="rounded-xl"
                        priority
                      />
                      <div className="grid gap-1.5 font-normal">
                        <p className="text-sm md:text-base leading-none font-medium">
                          Hoodie Pullover Fleece
                        </p>
                        <p className="text-muted-foreground text-sm">Jacket</p>
                      </div>
                    </div>
                  </div>

                  {/* Kanan: harga + jumlah */}
                  <div className="flex flex-row justify-between items-center md:flex-col md:justify-between md:items-end w-full md:w-auto pl-7 md:pl-0 mt-1 md:mt-0">
                    {/* Harga */}
                    <h2 className="font-bold text-base md:text-xl text-[#0A0D12] mb-0 md:mb-3 text-left md:text-right">
                      Rp275.000
                    </h2>

                    {/* Trash + tombol jumlah */}
                    <div className="flex items-center justify-end md:justify-between gap-4 w-full md:w-auto">
                      <Trash2 className="text-neutral-500" />
                      <div className="flex justify-center items-center border border-neutral-300 rounded-xl py-1.5 px-2 w-24 md:px-3 md:py-2 h-11 md:w-fit">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-lg font-bold px-0 md:px-2"
                          onClick={handleDecrease}
                        >
                          −
                        </Button>
                        <span className="mx-4 text-lg font-medium">
                          {quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-lg font-bold px-0 md:px-2"
                          onClick={handleIncrease}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </Label>
              </CardContent>
            </Card>
          </section>
          {/* second column */}
          <section>
            <section className="h-fit w-full rounded-xl ] bg-white shadow-[0px_0px_20px_0px_#CBCACA40] gap-4 py-5 px-5 mt-6 md:mt-0">
              <h2 className="text-left md:leading-8 font-bold text-lg md:text-xl text-[#0A0D12] pt-3">
                Total Shopping
              </h2>
              <div className="flex justify-between gap-2 py-2">
                <h2 className="text-left md:leading-8 font-normal md:text-lg text-md py-3">
                  Total
                </h2>
                <h2 className="text-right md:leading-8 font-bold text-md md:text-lg py-3">
                  Rp275.000
                </h2>
              </div>
              <Link href="/checkout-page">
                <Button className="w-full text-base h-12">Checkout</Button>
              </Link>
            </section>
          </section>
        </section>
      </MainLayout>
    </>
  );
}

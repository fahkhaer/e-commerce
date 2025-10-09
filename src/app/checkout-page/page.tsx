"use client";

import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { StoreIcon, } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/layouts/Navbar";

export default function CheckoutPage() {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // number input validation, 0-9
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setValue(onlyNumbers);
  };

  return (
    <>
      <Navbar />
      <MainLayout>
        <h1 className="font-bold text-2xl md:text-[32px] leading-9 md:leading-[42px] pb-8 px-4 md:px-0">
          Checkout
        </h1>
        <section className="mx-auto md:grid grid-cols-[7fr_3fr] w-full gap-6">
          {/* shipping address section */}
          <section className="w-full mx-auto h-fit gap-8 rounded-xl ] bg-white shadow-[0px_0px_20px_0px_#CBCACA40] p-3 md:p-5">
            <div>
              <h2 className="text-left md:leading-8 font-bold text-base md:text-lg md:pr-12 pt-3 pb-5 md:pt-0 md:pb-3">
                Shipping Address
              </h2>

              <form className="border-[#CBCACA40]">
                {/* <!-- Name --> */}
                <Input
                  className="h-14 my-1.5"
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                ></Input>
                <Input
                  className="h-14 my-1.5"
                  id="number-phone"
                  type="text"
                  placeholder="Number Phone"
                  value={value}
                  onChange={handleChange}
                  inputMode="numeric"
                  required
                ></Input>

                <Input
                  className="h-14 my-1.5"
                  id="city"
                  type="text"
                  placeholder="City"
                  required
                />
                <Input
                  className="h-14 my-1.5"
                  id="postal-code"
                  type="text"
                  placeholder="Postal Code"
                  required
                />
                <Textarea
                  className="font-regular text-muted-foreground resize-none h-31 my-1.5 p-3"
                  placeholder="Address"
                />
              </form>
            </div>
          </section>

          {/* payment method section */}
          <section className="h-fit w-full rounded-xl ] bg-white shadow-[0px_0px_20px_0px_#CBCACA40] gap-4 mt-5 md:mt-0 md:py-5 px-5 pb-5">
            {/* put radio button here */}

            {/* payment summary start here */}
            <div>
              <h2 className="text-left md:leading-8 font-bold text-base md:text-lg pt-4 pb-2 md:pb-0">
                Payment Summary
              </h2>

              <RadioGroup defaultValue="bni">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/BNI.png"
                      alt="BNI"
                      width={40}
                      height={40}
                      className="rounded-[8px]"
                      priority
                    />
                    <Label
                      htmlFor="bni"
                      className="text-left leading-7 md:leading-8 font-regular text-sm md:text-base py-3"
                    >
                      ❗️tambah bank. perbaiki py
                    </Label>
                  </div>

                  <RadioGroupItem value="default" id="bni" />
                </div>

                <hr className="bg-[#DFDFDF] dark:bg-[#252B37] h-px border-0 w-full"></hr>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/BNI.png"
                      alt="BNI"
                      width={40}
                      height={40}
                      className="rounded-[8px]"
                      priority
                    />
                    <Label
                      htmlFor="bri"
                      className="text-left leading-7 md:leading-8 font-regular text-sm md:text-base py-3"
                    >
                      BNI Virtual Account
                    </Label>
                  </div>
                  <RadioGroupItem value="bri" id="bri" />
                </div>
              </RadioGroup>
              <div className="flex justify-between gap-2">
                <div>
                  <h2 className="text-left leading-7 md:leading-8 font-normal text-sm md:text-base py-3">
                    Total Price of Goods
                  </h2>
                  <h2 className="text-left leading-7 md:leading-8 font-normal text-sm md:text-base">
                    Shipping Cost
                  </h2>
                  <h2 className="text-left leading-7 md:leading-8 font-bold text-sm md:text-base py-3">
                    Total
                  </h2>
                </div>

                <div>
                  <h2 className="text-right leading-7 md:leading-8 text-sm md:text-base font-bold py-3">
                    Rp 1.100.000
                  </h2>
                  <h2 className="text-right eading-7 md:leading-8 text-sm md:text-base font-bold">
                    Rp 10.000
                  </h2>
                  <h2 className="text-right eading-7 md:leading-8 text-sm md:text-base font-bold py-6 md:py-3">
                    Rp 1.110.000
                  </h2>
                </div>
              </div>
            </div>
            <Button className="w-full">Pay Now</Button>
          </section>
          <section className="w-full mx-auto h-fit gap-8 rounded-xl ] bg-white shadow-[0px_0px_20px_0px_#CBCACA40] p-3 md:p-5">
            <div className="flex gap-1.5 pb-5">
              <StoreIcon />
              <Label className="font-semibold leading-4 ">
                Toko Abdi Fashion
              </Label>
            </div>
            {/* <!-- Product --> */}
            <div>
              <div className="md:flex justify-between pb-3">
                <div className="flex md:justify-center">
                  <Image
                    src="/productexample.png"
                    alt="sneakers-court-minimalist"
                    width={80}
                    height={80}
                    className="rounded-xl"
                    priority
                  />
                  <div className="pl-3">
                    <h2 className="text-left leading-7 pb-1 md:pb-0 md:leading-8 font-bold text-sm md:text-lg">
                      Kaos Katun Premium
                    </h2>
                    <p className="text-[#535862] text-sm md:text-base">
                      T-Shirt
                    </p>

                    <h2 className="block md:hidden text-left leading-7 md:leading-8 font-bold text-sm md:text-lg text-[#0A0D12] md:py-3 pt-1 md:pb-0">
                      1 X Rp 1.100.000
                    </h2>
                  </div>
                </div>
                {/* price */}
                <div className="hidden md:block">
                  <h2 className="text-left leading-7 md:leading-8 font-bold text-sm md:text-lg text-[#0A0D12] py-3">
                    1 X Rp 1.100.000
                  </h2>
                </div>
              </div>
              <div className="md:flex justify-between pb-3">
                <div className="flex md:justify-center">
                  <Image
                    src="/productexample.png"
                    alt="sneakers-court-minimalist"
                    width={80}
                    height={80}
                    className="rounded-xl"
                    priority
                  />
                  <div className="pl-3">
                    <h2 className="text-left leading-7 pb-1 md:pb-0 md:leading-8 font-bold text-sm md:text-lg">
                      Kaos Katun Premium
                    </h2>
                    <p className="text-[#535862] text-sm md:text-base">
                      T-Shirt
                    </p>

                    <h2 className="block md:hidden text-left leading-7 md:leading-8 font-bold text-sm md:text-lg text-[#0A0D12] md:py-3 pt-1 md:pb-0">
                      1 X Rp 1.100.000
                    </h2>
                  </div>
                </div>
                {/* price */}
                <div className="hidden md:block">
                  <h2 className="text-left leading-7 md:leading-8 font-bold text-sm md:text-lg text-[#0A0D12] py-3">
                    1 X Rp 1.100.000
                  </h2>
                </div>
              </div>
            </div>

            <hr className="bg-[#DFDFDF] dark:bg-[#252B37] h-px border-0 w-full" />

            {/* <!-- Shipping Method --> */}
            <div>
              <h2 className="text-left md:leading-8 font-bold text-base md:text-lg pt-5 pb-5 md:pt-3 md:pb-3">
                Shipping Method
              </h2>

              <div className="mb-4">
                <p className="text-base font-normal leading-8"></p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Shipping" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Shipping</SelectLabel>
                      <SelectItem value="jne">JNE Regular</SelectItem>
                      <SelectItem value="jnt">JNT Express</SelectItem>
                      <SelectItem value="gosend">GoSend Instant</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <hr className="bg-[#DFDFDF] dark:bg-[#252B37] h-px border-0 w-full" />
            </div>
          </section>
        </section>
      </MainLayout>
    </>
  );
}

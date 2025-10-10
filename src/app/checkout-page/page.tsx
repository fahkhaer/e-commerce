"use client";

import React, { useEffect, useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { StoreIcon } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
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
import { useForm } from "react-hook-form";
import { addOrder } from "@/services/checkout";
import { CartItem, Shop } from "@/types/product.interface";
import { Address } from "@/types/checkout.interface";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingCost, setShippingCost] = useState(0); // ongkir
  const [itemsId, setItemsId] = useState<number[]>([]);
  const [items, setItems] = useState<{ items: CartItem[]; shop: Shop }[]>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<Address>({ mode: "onChange" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const totalPriceParam = params.get("totalPrice");
    if (totalPriceParam) {
      setTotalPrice(Number(totalPriceParam));
    }

    const itemIdParam = params.get("itemId");
    if (itemIdParam) {
      try {
        setItemsId(JSON.parse(itemIdParam));
      } catch (e) {
        console.error("Failed to parse itemsId:", e);
      }
    }

    const itemsParam = params.get("items");
    if (itemsParam) {
      try {
        setItems(JSON.parse(itemsParam));
      } catch (e) {
        console.error("Failed to parse items:", e);
      }
    }
  }, []);

  useEffect(() => {
    switch (shippingMethod) {
      case "jne":
      case "jnt":
      case "gosend":
        setShippingCost(10000); 
        break;
      default:
        setShippingCost(0);
    }
  }, [shippingMethod]);

  const onSubmit = async (data: Address) => {
    if (!shippingMethod) {
      router.push("/failed-checkout");
      return;
    }

    const newData = {
      address: {
        name: data.name,
        phone: data.phone,
        city: data.city,
        postalCode: data.postalCode,
        address: data.address,
      },
      shippingMethod,
      selectedItemIds: itemsId,
    };

    try {
      const response = await addOrder(newData);
      if (response) {
        router.push("/success-checkout");
      } else {
        router.push("/failed-checkout");
      }
    } catch (error) {
      console.log(error);
      router.push("/failed-checkout");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const itemIdParam = params.get("itemId");
    const itemsParam = params.get("items");

    if (itemIdParam) {
      try {
        setItemsId(JSON.parse(itemIdParam));
      } catch (e) {
        console.error("Failed to parse items:", e);
      }
    }
    if (itemsParam) {
      try {
        setItems(JSON.parse(itemsParam));
      } catch (e) {
        console.error("Failed to parse items:", e);
      }
    }
  }, []);


  const handlePayNowClick = async () => {
    const valid = await trigger();
    if (!valid || !shippingMethod) {
      router.push("/failed-checkout");
    } else {
      document
        .getElementById("my-form")
        ?.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
    }
  };
  const totalAll = totalPrice + shippingCost;

  return (
    <>
      <Navbar />
      <MainLayout>
        <h1 className="font-bold text-2xl md:text-[32px] leading-9 md:leading-[42px] md:pt-0 pt-6 pb-5 md:pb-8 px-4 md:px-0">
          Checkout
        </h1>
        <section className="mx-auto md:grid grid-cols-[7fr_3fr] w-full gap-6">
          <section>
            {/* shipping address section */}
            <section className="w-full mx-auto h-fit gap-8 rounded-xl ] bg-white shadow-[0px_0px_20px_0px_#CBCACA40] p-3 md:p-5">
              <div>
                <h2 className="text-left md:leading-8 font-bold text-base md:text-lg md:pr-12 pt-3 pb-5 md:pt-0 md:pb-3">
                  Shipping Address
                </h2>
                <form
                  className="border-[#CBCACA40]"
                  onSubmit={handleSubmit(onSubmit)}
                  id="my-form"
                >
                  <Input
                    className="h-14 my-1.5"
                    id="name"
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">Name is required</p>
                  )}
                  <Input
                    className="h-14 my-1.5"
                    id="phone"
                    type="number"
                    placeholder="Number Phone"
                    inputMode="numeric"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">Phone is required</p>
                  )}
                  <Input
                    className="h-14 my-1.5"
                    id="city"
                    type="text"
                    placeholder="City"
                    {...register("city", { required: true })}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">City is required</p>
                  )}
                  <Input
                    className="h-14 my-1.5"
                    id="postalCode"
                    type="number"
                    placeholder="Postal Code"
                    {...register("postalCode", { required: true })}
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-sm">
                      Postal Code is required
                    </p>
                  )}
                  <Textarea
                    className="font-regular text-muted-foreground resize-none h-31 my-1.5 p-3"
                    placeholder="Address"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">Address is required</p>
                  )}
                </form>
              </div>
            </section>
            <section className="w-full mx-auto mt-5 h-fit gap-8 rounded-xl ] bg-white shadow-[0px_0px_20px_0px_#CBCACA40] p-3 md:p-5">
              {items?.map((item, i) => (
                <div key={i}>
                  <div className="flex gap-1.5 pb-5">
                    <StoreIcon />
                    <Label className="font-semibold leading-4 ">
                      {item.shop.name}
                    </Label>
                  </div>
                  {/* <!-- Product --> */}
                  <div className="mb-6">
                    {item.items.map((item) => (
                      <div
                        className="md:flex justify-between pb-3"
                        key={item.id}
                      >
                        <div className="flex md:justify-center">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.title}
                            width={80}
                            height={80}
                            className="rounded-xl"
                            priority
                          />
                          <div className="pl-3">
                            <h2 className="text-left leading-7 pb-1 md:pb-0 md:leading-8 font-bold text-sm md:text-lg">
                              {item.product.title}
                            </h2>
                            <p className="text-[#535862] text-sm md:text-base"></p>
                            {item.product.title.split(" ")[0]}
                            <h2 className="block md:hidden text-left leading-7 md:leading-8 font-bold text-sm md:text-lg text-[#0A0D12] md:py-3 pt-1 md:pb-0">
                              {item.product.title.split(" ")[0]}
                            </h2>
                          </div>
                        </div>
                        {/* price */}
                        <div className="hidden md:block">
                          <h2 className="text-left leading-7 md:leading-8 font-bold text-sm md:text-lg text-[#0A0D12] py-3">
                            {item.qty} X {item.product.price}{" "}
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <hr className="bg-[#DFDFDF] dark:bg-[#252B37] h-px border-0 w-full" />

              {/* <!-- Shipping Method --> */}
              <div>
                <h2 className="text-left md:leading-8 font-bold text-base md:text-lg pt-5 pb-5 md:pt-3 md:pb-3">
                  Shipping Method
                </h2>

                <div className="mb-4">
                  <p className="text-base font-normal leading-8"></p>
                  <Select onValueChange={(value) => setShippingMethod(value)}>
                    <SelectTrigger className="w-full py-6 ">
                      <SelectValue className="" placeholder="Select Shipping" />
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
                  {!shippingMethod && (
                    <p className="text-red-500 text-sm mt-1">
                      Please select a shipping method
                    </p>
                  )}
                </div>
              </div>
            </section>
          </section>

          {/* payment method section */}
          <section className="h-fit w-full rounded-xl ] bg-white shadow-[0px_0px_20px_0px_#CBCACA40] gap-4 mt-5 md:mt-0 md:py-5  pb-5">
            {/* payment summary start here */}
            <div className="px-5">
              <h2 className="text-left md:leading-8 font-bold text-base md:text-lg pb-2 md:pb-0">
                Payment Summary
              </h2>

              <RadioGroup>
                <div className="flex items-center justify-between pt-2">
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
                      BNI Virtual Account
                    </Label>
                  </div>

                  <RadioGroupItem value="bni" id="bni" />
                </div>

                <hr className="bg-[#DFDFDF] dark:bg-[#252B37] h-px border-0 w-full" />
                {/* second bank */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/BRI.png"
                      alt="BRI"
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
                <hr className="bg-[#DFDFDF] dark:bg-[#252B37] h-px border-0 w-full" />
                {/* third bank */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/BCA.png"
                      alt="BCA"
                      width={40}
                      height={40}
                      className="rounded-[8px]"
                      priority
                    />
                    <Label
                      htmlFor="bca"
                      className="text-left leading-7 md:leading-8 font-regular text-sm md:text-base py-3"
                    >
                      BCA Virtual Account
                    </Label>
                  </div>
                  <RadioGroupItem value="bca" id="bca" />
                </div>
                {/* fourth bank */}
                <hr className="bg-[#DFDFDF] dark:bg-[#252B37] h-px border-0 w-full"></hr>
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Mandiri.png"
                      alt="Mandiri"
                      width={40}
                      height={40}
                      className="rounded-[8px]"
                      priority
                    />
                    <Label
                      htmlFor="bri"
                      className="text-left leading-7 md:leading-8 font-regular text-sm md:text-base py-3"
                    >
                      Mandiri Virtual Account
                    </Label>
                  </div>
                  <RadioGroupItem value="mandiri" id="mandiri" />
                </div>
              </RadioGroup>
            </div>
            <hr className="bg-[#DFDFDF] dark:bg-[#252B37] h-px border-0 w-full"></hr>
            {/* hr taro sini */}
            <div>
              <h2 className="text-left leading-7 md:leading-8 font-bold text-sm md:text-base px-5 pt-3">
                Payment Summary
              </h2>
              <div className="flex justify-between gap-2 px-5">
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
                    Rp {totalPrice.toLocaleString()}
                  </h2>

                  <h2 className="text-right leading-7 md:leading-8 text-sm md:text-base font-bold">
                    Rp {shippingCost.toLocaleString()}
                  </h2>

                  <h2 className="text-right leading-7 md:leading-8 text-sm md:text-base font-bold py-6 md:py-3">
                    Rp {totalAll.toLocaleString()}
                  </h2>
                </div>
              </div>
              <div className="px-5">
                <Button
                  className="w-full h-11.5  font-semibold"
                  type="button"
                  onClick={handlePayNowClick}
                >
                  Pay Now
                </Button>
              </div>
            </div>
          </section>
        </section>
      </MainLayout>
    </>
  );
}

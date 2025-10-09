"use client";

import MainLayout from "@/components/layouts/MainLayout";
import Navbar from "@/components/layouts/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { deleteCart, editCart, getCart } from "@/services/cart";
import { CartItem, CartResponse, Shop } from "@/types/product.interface";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { StoreIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductItemProps {
  shop: Shop;
  items: CartItem[];
  onCheckedChange: (id: number) => void;
}

const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (itemId: number) => deleteCart(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ itemId, qty }: { itemId: number; qty: number }) =>
      editCart(itemId, qty),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

const ProductItem = ({ shop, items, onCheckedChange }: ProductItemProps) => {
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  const { mutate: deleteItem, isPending } = useDeleteCartItem();
  const { mutate: updateItemQty } = useUpdateCartItem();

  useEffect(() => {
    const initialQuantities: { [id: string]: number } = {};
    items.forEach((item) => {
      initialQuantities[item.id] = item.qty;
    });
    setQuantities(initialQuantities);
  }, [items]);

  const handleIncrease = (itemId: number, stock: number) => {
    setQuantities((prev) => {
      const currentQty = prev[itemId];

      if (currentQty >= stock) {
        return prev;
      }

      const newQty = currentQty + 1;
      updateItemQty({ itemId, qty: newQty });
      return { ...prev, [itemId]: newQty };
    });
  };

  const handleDecrease = (itemId: number) => {
    setQuantities((prev) => {
      const currentQty = prev[itemId];

      if (currentQty <= 1) {
        deleteItem(itemId);
        return prev;
      }

      const newQty = currentQty - 1;
      updateItemQty({ itemId, qty: newQty });

      return { ...prev, [itemId]: newQty };
    });
  };

  const handleChange = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    onCheckedChange(id);
  };
  return (
    <Card className="p-0 shadow-none">
      <CardContent className="p-0">
        {/* seller */}
        <div className="flex items-center gap-1.5 p-3">
          <Checkbox />
          <StoreIcon className="ml-1.5" />
          <Label className="font-semibold leading-4 ">{shop.name}</Label>
        </div>
        {items.map((item) => (
          <div key={item.id}>
            <Label className=" flex flex-col md:flex-row md:justify-between items-start gap-3 my-1 md:my-4 px-3 pb-2.5 md:py-3 rounded-lg has-[[aria-checked=true]]:border has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <div className="flex gap-3 md:pt-0 pt-2.5">
                <div className="flex flex-col justify-start">
                  <Checkbox
                    checked={!!checkedItems[item.id]}
                    onCheckedChange={() => handleChange(item.id)}
                  />
                </div>
                {/* Image dan text */}
                <div className="flex items-center gap-3">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.title}
                    width={80}
                    height={80}
                    className="rounded-xl"
                    priority
                  />
                  <div className="grid gap-1.5 font-normal">
                    <p className="text-sm md:text-base leading-none font-medium">
                      {item.product.title}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.product.title.split(" ")[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Kanan: harga + jumlah */}
              <div className="flex flex-row justify-between items-center md:flex-col md:justify-between md:items-end w-full md:w-auto pl-7 md:pl-0 mt-1 md:mt-0">
                {/* Harga */}
                <h2 className="font-bold text-base md:text-xl text-[#0A0D12] mb-0 md:mb-3 text-left md:text-right">
                  {item.qty * item.product.price}
                </h2>

                {/* Trash + tombol jumlah */}
                <div className="flex items-center justify-end md:justify-between gap-4 w-full md:w-auto">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteItem(item.id)}
                    disabled={isPending}
                  >
                    <Trash2 className="text-neutral-500" />
                  </Button>
                  <div className="flex justify-center items-center border border-neutral-300 rounded-xl py-1.5 px-2 w-24 md:px-3 md:py-2 h-11 md:w-fit">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-lg font-bold px-0 md:px-2"
                      onClick={() => handleDecrease(item.id)}
                    >
                      −
                    </Button>
                    <span className="mx-4 text-lg font-medium">
                      {quantities[item.id]}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-lg font-bold px-0 md:px-2"
                      onClick={() =>
                        handleIncrease(item.id, item.product.stock)
                      }
                      disabled={quantities[item.id] >= item.product.stock}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </Label>
            <hr className="mx-3" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default function CartPage() {
  const [checkedItemIds, setCheckedItemIds] = useState<number[]>([]);
  const { data, isLoading, error } = useQuery<CartResponse, Error>({
    queryKey: ["cart"],
    queryFn: getCart,
    staleTime: 1000 * 60 * 5,
  });

  const handleCheckedChange = (id: number) => {
    setCheckedItemIds((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  const result = data?.groups
    .map((group) => {
      const filteredItems = group.items.filter((item) =>
        checkedItemIds.includes(item.id)
      );

      if (filteredItems.length > 0)
        return {
          shop: group.shop,
          items: filteredItems,
        };
    })
    .filter(Boolean);

  if (isLoading) return <div>Loading cart...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Navbar />
      <MainLayout>
        <section className="mx-auto md:grid grid-cols-[7fr_3fr] w-full gap-6">
          <section className="w-full mx-auto">
            <h1 className="font-bold text-3xl md:text-[32px] leading-9 md:leading-[42px] md:pt-0 pt-6 pb-6  md:px-0">
              Cart
            </h1>
            <div className="flex items-center text-md font-medium gap-3 pb-5">
              <Checkbox id="all" />
              <Label htmlFor="all">Select All</Label>
            </div>
            {data?.groups.map((item, i) => (
              <div key={i}>
                <ProductItem
                  shop={item.shop}
                  items={item.items}
                  onCheckedChange={handleCheckedChange}
                />
                <br />
              </div>
            ))}
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
                  {data?.grandTotal}
                </h2>
              </div>
              <Link
                href={{
                  pathname: "/checkout-page",
                  query: {
                    itemId: JSON.stringify(checkedItemIds),
                    items: JSON.stringify(result),
                  },
                }}
              >
                <Button className="w-full text-base h-12">Checkout</Button>
              </Link>
            </section>
          </section>
        </section>
      </MainLayout>
    </>
  );
}

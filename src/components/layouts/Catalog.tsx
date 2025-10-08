"use client";

import { getProducts } from "@/services/products";
import { iProduct } from "@/types/product.interface";
import { useQuery } from "@tanstack/react-query";
import { BadgeCheck, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CatalogProps {
  product: iProduct[] | undefined;
}

export default function Catalog({ product }: CatalogProps) {
  const router = useRouter();

  const [visibleItems, setVisibleItems] = useState(16);

  const { data, isLoading } = useQuery<iProduct[]>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const loadMore = () => {
    setVisibleItems((prev) => prev + 16);
  };

  const dataToDisplay = Array.isArray(product)
    ? product.slice(0, visibleItems)
    : Array.isArray(data)
    ? data.slice(0, visibleItems)
    : [];

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {/* grid daftar produk */}
      <div className="w-full bg-white py-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
            {/* put card product here */}
            {dataToDisplay?.map((item: iProduct) => (
              <div
                key={item.id}
                className="shadow-[0_0_20px_0_#CBCACA40]"
                onClick={() => router.push(`/detail-product/${item.id}`)}
              >
                {/* product image */}
                <Image
                  className="h-auto w-full"
                  src={item.images[0] || "/imagecorrupt.png"}
                  alt="productexample.png"
                  width={100}
                  height={500}
                  priority
                />
                {/* product description */}
                <div className="p-3 ">
                  <div className="text-sm md:text-base hover:text-primary hover:scale-105 transition duration-500 block">
                    <Link href="/detail-product">{item.title}</Link>
                  </div>
                  <p className="text-sm md:text-base font-bold py-1">
                    Rp{item.price}
                  </p>
                  <div className="flex items-center">
                    <Star className="fill-[#FFAB0D] stroke-0 h-4" />
                    <div>
                      <span>{item.rating}</span>
                      <span>・{item.soldCount} Sold</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BadgeCheck className="fill-[#176FFB] stroke-white h-4.5" />
                    <div>{item.shop.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleItems < (data as iProduct[]).length && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                className={cn("px-4 py-2 w-55 hover:bg-accent transition")}
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

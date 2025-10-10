"use client";
import Catalog from "@/components/layouts/Catalog";
import MainLayout from "@/components/layouts/MainLayout";
import Navbar from "@/components/layouts/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getProducts, getProductsById } from "@/services/products";
import { iProduct } from "@/types/product.interface";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";

export default function Store() {
  const params = useParams();
  const { id } = params;

  const { data: products, isLoading } = useQuery<iProduct[]>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const storeProducts = products?.filter(
    (product) => product.shop.id === Number(id)
  );

  const shopInfo = storeProducts?.[0]?.shop;

  const { data: product, isLoading: isLoadingProduct } = useQuery<iProduct>({
    queryKey: ["product", id],
    queryFn: () => getProductsById(Number(id)),
    enabled: !!id,
  });

  return (
    <>
      <Navbar />
      <MainLayout>
        <div>
          <h4 className="text-3xl mt-8 font-bold md:hidden">Products</h4>
          <Card className="flex justify-around p-5 mt-5 md:mt-0 mb-8 shadow-none">
            <div className="flex justify-between items-center gap-4">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/mustache.png" alt="Store Avatar" />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">
                    {shopInfo?.name || "Unknown Store"}
                  </h3>
                  <p className="text-neutral-700">
                    {shopInfo?.address || "Unknown Address"}
                  </p>
                </div>
              </div>
              {/* review and rating */}
              <div className="">
                <p className="text-sm md:text-lg font-semibold flex gap-1  justify-center">
                  <Star className="fill-[#FFAB0D] stroke-0 h-4.5 md:h-6 ml-0" />
                  4.9
                </p>
                <Label className="leading-8 text-neutral-700">
                  Reviews and Rating
                </Label>
              </div>
            </div>
          </Card>
          <h4 className="text-3xl font-bold hidden md:block">Products</h4>

          <Catalog product={undefined} />
        </div>
      </MainLayout>
    </>
  );
}

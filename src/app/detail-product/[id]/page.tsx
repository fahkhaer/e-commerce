"use client";

import { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import Navbar from "@/components/layouts/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs";
import { addCart } from "@/services/cart";
import { getProducts, getProductsById } from "@/services/products";
import { iProduct } from "@/types/product.interface";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DetailProduct() {
  const params = useParams();
  const { id } = params;
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const { data: products, isLoading: isLoadingProducts } = useQuery<iProduct[]>(
    {
      queryKey: ["products"],
      queryFn: () => getProducts(),
    }
  );

  const { data: product, isLoading: isLoadingProduct } = useQuery<iProduct>({
    queryKey: ["product", id],
    queryFn: () => getProductsById(Number(id)),
    enabled: !!id,
  });

  if (isLoadingProduct) return <p>Loading...</p>;

  const relatedProducts = products?.filter(
    (item) => item.category.name === product?.category.name
  );

  const handleAddToCart = async () => {
    if (!product) return;
    await addCart(product.id, quantity);
    alert(`Added ${quantity} item(s) of ${product.title} to cart!`);
  };

  return (
    <>
      <Navbar />
      <MainLayout>
        <div id="prodDetailTop" className="pb-6 md:mt-1 mt-6">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList className="font-bold text-black text-md">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/detail-product">Detail</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product?.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Product detail */}
          <div className="flex flex-col md:flex-row gap-5 mt-5 items-start">
            {/* Left image */}
            <div className="w-full md:w-1/3 rounded-xl overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={product?.images[0] || "/imagecorrupt.png"}
                  alt={product?.title || "Product"}
                  width={402}
                  height={402}
                  className="rounded-xl"
                  priority
                />
              </div>

              <div className="flex w-full overflow-hidden gap-2 pt-5">
                {product?.images.map((item, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="group hover:border-2 hover:border-neutral-950 hover:rounded-2xl"
                  >
                    <Image
                      priority
                      src={
                        item?.startsWith("http") || item?.startsWith("/")
                          ? item
                          : `/${item || "productexample.png"}`
                      }
                      alt={`Product ${i + 1}`}
                      width={72}
                      height={72}
                      className="w-[72px] rounded-2xl group-hover:scale-95 transition duration-500"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right description */}
            <div className="w-full md:w-2/3">
              <div className="w-full border-neutral-300 border-b">
                <h4 className="text-base md:text-xl font-semibold">
                  {product?.title}
                </h4>
                <p className="text-xl md:text-[32px] font-bold py-2">
                  Rp {product?.price?.toLocaleString("id-ID")}
                </p>
                <p className="text-sm md:text-lg font-semibold flex gap-2 mb-5">
                  <Star className="fill-[#FFAB0D] stroke-0 h-6 ml-0" />
                  <Label>{product?.rating}</Label>
                </p>
              </div>

              {/* Deskripsi */}
              <Tabs>
                <div className="text-sm md:text-base py-5 space-y-4">
                  <p className="leading-7.5">
                    <span className="font-bold md:font-semibold mb-1 block">
                      Deskripsi
                    </span>
                    {product?.description}
                  </p>
                </div>
              </Tabs>

              {/* Store info */}
              <div className="flex justify-between items-center border-t border-b border-neutral-300 py-5">
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      className="rounded-full h-8 w-8 object-cover"
                      src={product?.shop.logo || "/imagecorrupt.png"}
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-bold">
                      {product?.shop.name || "Unknown Store"}
                    </h3>
                    <p className="text-neutral-700">
                      {product?.shop.address || "Unknown Address"}
                    </p>
                  </div>
                </div>
                <Link href={`/store/${product?.shop.id}`}>
                  <Button
                    variant="outline"
                    className="rounded-lg text-sm font-semibold px-5 py-2"
                  >
                    See Store
                  </Button>
                </Link>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between py-5">
                <div className="flex items-center gap-6">
                  <p className="text-sm md:text-base font-semibold">Quantity</p>
                  <div className="flex items-center border border-neutral-300 rounded-xl px-4 py-2 h-11.5 w-fit">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-lg font-bold px-2"
                      onClick={handleDecrease}
                    >
                      −
                    </Button>
                    <span className="mx-4 text-lg font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-lg font-bold px-2"
                      onClick={handleIncrease}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 bg-black h-12 text-white w-full md:w-80 py-4 rounded-md hover:bg-gray-800 transition duration-300"
              >
                <Link href="/cart-page">
                  <span className="text-lg font-medium">+ Add to Cart</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-6 py-6 border-t">
          <h4 className="text-3xl font-bold">Product Reviews</h4>
          <div className="flex items-center gap-2">
            <Star className="text-yellow-500 fill-yellow-500" size={28.5} />
            <p className="font-semibold text-lg">{product?.rating}</p>
            <p className="text-sm text-muted-foreground">/5.0</p>
          </div>
          {product?.reviews.map((item, i) => (
            <div key={i}>
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage
                    src={item ?? "https://i.pravatar.cc/150?img=3"}
                  />
                  <AvatarFallback>J</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">
                    25 August 2025, 13:38
                  </p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor
                    aliquam viverra nunc sed facilisis. Integer tristique nullam
                    morbi mauris ante.
                  </p>
                </div>
              </div>
              <Separator className="my-6" />
            </div>
          ))}
          <div className="flex justify-center">
            <Button
              variant="outline"
              className={"px-4 py-2 w-55 hover:bg-accent transition"}
            >
              Load More
            </Button>
          </div>
        </div>

        {/* Related products */}
        <div className="pt-8 border-t border-neutral-300">
          <h4 className="text-3xl font-bold mb-6">Related Product</h4>
          <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
            {isLoadingProducts ? (
              <p>Loading...</p>
            ) : (
              relatedProducts?.map((item) => (
                <div key={item.id} className="item-card">
                  <Image
                    src={item.images[0] || "/imagecorrupt.png"}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full"
                    priority
                  />
                  <div className="p-5">
                    <Link
                      href={`/detail-product/${item.id}`}
                      className="text-sm md:text-base hover:text-primary hover:scale-105 transition duration-500 block"
                    >
                      {item.title}
                    </Link>
                    <p className="text-base font-bold py-1">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                    <p className="text-base flex gap-2">
                      <Star className="fill-[#FFAB0D] stroke-0 h-4" />
                      {item.rating}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
}

"use client";

import MainLayout from "@/components/layouts/MainLayout";
import NavbarLoginUser from "@/components/layouts/NavbarLoginUser";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  return (
    <>
      <NavbarLoginUser />
      <MainLayout>
        <div id="prodDetailTop" className="pb-12">
          {/* Breadcrumb section */}
          <div>
            <Breadcrumb>
              <BreadcrumbList>
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
                  <BreadcrumbPage>Sneakers Court Minimalis</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* product detail section */}
          <div className="flex flex-col md:flex-row gap-5 items-start">
            {/* product image left */}
            <div className="w-full md:w-1/3 rounded-xl overflow-hidden">
              <div id="imageProdMain" className="rounded-xl overflow-hidden">
                <Image
                  src={"/productexample.png"}
                  alt="Product 1"
                  width={400}
                  height={400}
                  className="rounded-xl"
                  priority
                />
              </div>
              <div
                id="thumbProductWrapper"
                className="flex w-full overflow-hidden gap-2 pt-5"
              >
                {product?.images.map((item, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="group hover:border-2 hover:border-neutral-950 hover:rounded-2xl"
                  >
                    <Image
                    priority
                      src={item}
                      alt={`Product ${i + 1}`}
                      width={72}
                      height={72}
                      className="w-[72px] rounded-2xl group-hover:scale-95 transition duration-500"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* product description right */}
            <div className="w-full md:w-2/3">
              <div className="w-full border-neutral-300 border-b">
                <h4 className="text-base md:text-xl font-semibold">
                  {product?.title}
                </h4>
                <p className="text-xl md:text-[32px] font-bold py-2">
                  {product?.price}
                </p>
                <p className="text-sm md:text-lg font-semibold flex gap-2 mb-5">
                  <Star className="fill-[#FFAB0D] stroke-0 h-4 ml-1" />
                  <Label htmlFor="star4.9">{product?.rating}</Label>
                </p>
              </div>

              {/* Tabs untuk Deskripsi & Spesifikasi */}
              <Tabs
                defaultValue="desc"
                className="pt-5 border-b border-neutral-300"
              >
                <TabsList className="flex w-full md:w-auto">
                  <TabsTrigger value="desc" className="w-1/2">
                    Deskripsi
                  </TabsTrigger>
                  <TabsTrigger value="spec" className="w-1/2">
                    Spesifikasi
                  </TabsTrigger>
                </TabsList>

                <TabsContent
                  value="desc"
                  className="py-5 text-sm md:text-base border-b border-neutral-300"
                >
                  <div className="text-sm md:text-base py-5 space-y-4">
                    <p>
                      <span className="font-semibold">
                        Sneakers Court Minimalis – Ivory Beige
                      </span>
                      <br />
                      {product?.description}
                    </p>
                    <br />
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        <span className="font-semibold">Desain:</span> Low-top
                        dengan siluet klasik yang timeless
                      </li>
                      <li>
                        <span className="font-semibold">Material:</span> Kulit
                        sintetis premium + suede sintetis
                      </li>
                      <li>
                        <span className="font-semibold">Sol:</span> Outsole
                        karet anti-slip dengan warna natural gum untuk daya
                        cengkeram yang baik
                      </li>
                      <li>
                        <span className="font-semibold">Kenyamanan:</span>{" "}
                        Insole empuk dengan bantalan ekstra untuk pemakaian
                        sehari-hari
                      </li>
                      <li>
                        <span className="font-semibold">Warna:</span> Ivory
                        Beige
                      </li>
                      <li>
                        <span className="font-semibold">Gaya:</span> Cocok untuk
                        casual look, street style, maupun semi-formal
                      </li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent
                  value="spec"
                  className="pb-5 text-sm md:text-base border-b border-neutral-300"
                >
                  <ul className="list-disc pl-6">
                    <li>Desain: Low-top dengan siluet klasik yang timeless</li>
                    <li>Material: Kulit sintetis premium + suede sintetis</li>
                    <li>
                      Sol: Outsole karet anti-slip dengan warna natural gum
                    </li>
                    <li>Kenyamanan: Insole empuk dengan bantalan ekstra</li>
                    <li>Warna: Ivory Beige</li>
                    <li>
                      Gaya: Cocok untuk casual look, street style, maupun
                      semi-formal
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>

              {/* Quantity section */}
              <div className="flex items-center gap-10 py-5">
                <p className="text-base font-semibold">Quantity</p>
                <div className="flex items-center border border-neutral-300 rounded-xl px-4 py-2 w-fit">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-lg font-bold px-2"
                  >
                    -
                  </Button>
                  <span className="mx-4 text-lg font-medium">2</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-lg font-bold px-2"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* button add to cart */}
              <Button
                asChild
                className="flex items-center justify-center gap-2 bg-black text-white px-20 py-3 rounded-md hover:bg-primary hover:text-black hover:scale-105 duration-500 transition md:inline-block w-full md:w-auto"
              >
                <Link href="/cart">
                  <span className="text-lg">+</span>
                  <span>Add to Cart</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Review start here */}
        <div className="space-y-6 p-6 border-t">
          <h2 className="text-xl font-semibold">Product Reviews</h2>

          <div className="flex items-center gap-2">
            <Star className="text-yellow-500 fill-yellow-500" size={20} />
            <p className="font-semibold text-lg">4.9</p>
            <p className="text-sm text-muted-foreground">/5.0</p>
          </div>

          {/* Review 1 */}
          <div>
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=3" />
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

          {/* Review 2 */}
          <div>
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=5" />
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

          {/* Review 3 */}
          <div>
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=7" />
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
          </div>
        </div>
        {/* Related Product start here */}
        <div
          id="relatedProdSection"
          className="py-8 border-t border-neutral-300"
        >
          <h4 className="w-full text-xl md:text-[32px] font-bold mb-8">
            Related Products
          </h4>
          <div
            id="productListWrapper"
            className="grid gap-5 grid-cols-2 md:grid-cols-4"
          >
            {isLoadingProducts ? (
              <p>Loading...</p>
            ) : (
              relatedProducts?.map((item) => (
                <div key={item.id} className="item-card" >
                  <div>
                    <Image
                      src={item.images[0] || "/productexample.png"}
                      alt="Product 5"
                      width={300}
                      height={300}
                      className="w-full"
                      priority
                    />
                  </div>
                  <div className="p-5">
                    <Link
                      href="/detail-prod"
                      className="text-sm md:text-base hover:text-primary hover:scale-105 transition duration-500 block"
                    >
                      {item.title}
                    </Link>
                    <p className="text-base font-bold py-1">{item.price}</p>
                    <p className="text-base flex gap-2">
                      <Star className="fill-[#FFAB0D] stroke-0 h-4" />
                      {item.rating}
                    </p>
                  </div>
                </div>
              ))
            )}
            {/* item product */}
          </div>
        </div>
      </MainLayout>
    </>
  );
}

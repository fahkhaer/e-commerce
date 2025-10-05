import MainLayout from "@/components/layouts/MainLayout";
import NavbarLoginUser from "@/components/layouts/NavbarLoginUser";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DetailProduct() {
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
                  src="/productexample.png"
                  alt="Product 1"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>

              <div
                id="thumbProductWrapper"
                className="flex w-full overflow-hidden gap-2 pt-5"
              >
                {[
                  "BRI.png",
                  "BNI.png",
                  "BCA.png",
                  "Mandiri.png",
                  "Hero.png",
                ].map((img, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="group hover:border-2 hover:border-neutral-950 hover:rounded-2xl"
                  >
                    <Image
                      src={`/${img}`}
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
                  Sneakers Court Minimalis
                </h4>
                <p className="text-xl md:text-[32px] font-bold py-2">
                  Rp. 275.000
                </p>
                <p className="text-sm md:text-lg font-semibold flex gap-2 mb-5">
                  <Star className="fill-[#FFAB0D] stroke-0 h-4 ml-1" />
                  <Label htmlFor="star4.9">4.9</Label>
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
                      Sepatu sneakers bergaya minimalis dengan kombinasi warna
                      ivory dan beige yang elegan. Terbuat dari material kulit
                      sintetis berkualitas dengan sentuhan suede halus di bagian
                      panel samping dan depan.
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
      </MainLayout>
    </>
  );
}

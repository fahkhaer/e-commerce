"use client";

import MainLayout from "@/components/layouts/MainLayout";
import NavbarLoginUser from "@/components/layouts/NavbarLoginUser";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";
import { FilterIcon, Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Catalog from "@/components/layouts/Catalog";
import CheckboxAll from "@/components/ui/CheckboxAll";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/products";
import { iProduct } from "@/types/product.interface";
import { useEffect, useState } from "react";
import { iCategory } from "@/types/category.interface";
import { getCategories } from "@/services/categories";

export default function CatalogPage() {
  const [selectedValue, setSelectedValue] = useState("most-popular");
  const [dataSorted, setDataSorted] = useState<iProduct[]>();
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const { data: products, isLoading: isLoadingProducts } = useQuery<iProduct[]>(
    {
      queryKey: ["products"],
      queryFn: () => getProducts(),
    }
  );

  const { data: categories } = useQuery<iCategory[]>({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  const handleCheckedItems = (values: string[]) => {
    console.log("Yang dicentang:", values);
    if (!products) return;

    const filter: iProduct[] = products.filter((item) =>
      values.includes(item.category.name)
    );
    setDataSorted(filter);
  };

  const handleCheckedRatings = (rating: number, checked: boolean) => {
    const nextRatings = checked
      ? [...selectedRatings, rating]
      : selectedRatings.filter((r) => r !== rating);

    setSelectedRatings(nextRatings);

    const filter =
      products?.filter((p) => nextRatings.includes(p.rating)) || [];

    setDataSorted(filter);
  };

  const handleChange = (option: string) => {
    if (!products) return;

    const sorted: iProduct[] = [...products];

    switch (option) {
      case "most-popular":
        sorted.sort((a, b) => b.soldCount - a.soldCount);
        break;
      case "top-rated":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "highest-price":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "lowest-price":
        sorted.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setDataSorted(sorted);
  };

  useEffect(() => {}, [selectedValue, dataSorted]);

  if (isLoadingProducts) return <p>Loading...</p>;

  return (
    <>
      <NavbarLoginUser />
      <MainLayout>
        <section className="max-w-[1200px] mx-auto p-4 md:p-0 w-full">
          <h2 className="w-full text-[32px] font-bold md:pt-6">
            Catalog - perbaiki padding top❗️
          </h2>
          <div className="flex md:gap-5 items-start pt-2 md:pt-5 pb-12">
            <div className="hidden md:flex flex-col w-1/5 border border-neutral-300 rounded-2xl">
              <div className="p-5 ">
                <h3 className="text-base font-bold mb-2">FILTER</h3>
                <h4 className="text-base font-semibold mb-2">
                  Categories-❗️px
                </h4>
                {/* checkbox list */}
                <CheckboxAll
                  items={categories?.map((category) => category.name) ?? []}
                  onChange={handleCheckedItems}
                />
              </div>
              <hr className="mb-5 text-neutral-300" />
              <div className="px-5">
                <h4 className="text-base font-semibold mb-2">Price</h4>
                <div className="space-y-2">input harga disini❗️</div>
              </div>
              <hr className="mt-5 text-neutral-300"></hr>
              <div className="p-5">
                <h4 className="text-base font-semibold mb-2.5">Rating</h4>
                <div className="flex flex-col gap-2">
                  {/* rating list start here */}
                  <div className="flex items-center ">
                    <Checkbox
                      id="star5"
                      onCheckedChange={(checked) =>
                        handleCheckedRatings(5, checked === true)
                      }
                    />
                    <Star className="fill-[#FFAB0D] stroke-0 h-4 ml-1" />
                    <Label htmlFor="star5">5</Label>
                  </div>
                  <div className="flex items-center ">
                    <Checkbox
                      id="star4"
                      onCheckedChange={(checked) =>
                        handleCheckedRatings(4, checked === true)
                      }
                    />
                    <Star className="fill-[#FFAB0D] stroke-0 h-4 ml-1" />
                    <Label htmlFor="star4">4</Label>
                  </div>
                  <div className="flex items-center ">
                    <Checkbox
                      id="star3"
                      onCheckedChange={(checked) =>
                        handleCheckedRatings(3, checked === true)
                      }
                    />
                    <Star className="fill-[#FFAB0D] stroke-0 h-4 ml-1" />
                    <Label htmlFor="star3">3</Label>
                  </div>
                  <div className="flex items-center ">
                    <Checkbox
                      id="star2"
                      onCheckedChange={(checked) =>
                        handleCheckedRatings(2, checked === true)
                      }
                    />
                    <Star className="fill-[#FFAB0D] stroke-0 h-4 ml-1" />
                    <Label htmlFor="star2">2</Label>
                  </div>
                  <div className="flex items-center ">
                    <Checkbox
                      id="star1"
                      onCheckedChange={(checked) =>
                        handleCheckedRatings(1, checked === true)
                      }
                    />
                    <Star className="fill-[#FFAB0D] stroke-0 h-4 ml-1" />
                    <Label htmlFor="star1">1</Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/5">
              <div className="grid grid-cols-2 gap-5 md:flex md:gap-0 justify-between items-center">
                <p className="text-base col-span-2">
                  Showing {products?.length} products ❗️perbaiki pb
                </p>

                {/* filter for mobile design */}
                <div id="filterLog">
                  <a
                    href="#"
                    className="flex md:hidden items-center gap-2.5 border-neutral-300 border rounded-md py-2 px-4 grow justify-between"
                  >
                    <span className="text-neutral-950 text-sm">
                      Filter ❗️belum pake shadcn. ganti
                    </span>
                    <FilterIcon />
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="text-base font-bold hidden md:block">Sort</p>
                  <Select
                    value={selectedValue}
                    onValueChange={(value) => {
                      setSelectedValue(value); // update state selectedValue
                      handleChange(value); // panggil fungsi sort/filter sesuai value
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Most Popular" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="most-popular">
                          Most Popular
                        </SelectItem>
                        <SelectItem value="top-rated">Top Rated</SelectItem>
                        <SelectItem value="highest-price">
                          Highest Price
                        </SelectItem>
                        <SelectItem value="lowest-price">
                          Lowest Price
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* grid catalog start here*/}
              <div>
                <Catalog product={dataSorted} />
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

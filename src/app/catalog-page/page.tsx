"use client";

import MainLayout from "@/components/layouts/MainLayout";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";
import { ListFilter, Star, XIcon } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/products";
import { iProduct } from "@/types/product.interface";
import { useEffect, useState } from "react";
import { iCategory } from "@/types/category.interface";
import { getCategories } from "@/services/categories";
import Navbar from "@/components/layouts/Navbar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PriceInputProps {
  id: string;
  placeholder: string;
  value: number | "";
  onChange: (value: number) => void;
}

const PriceInput = ({ id, placeholder, value, onChange }: PriceInputProps) => {
  return (
    <div className="relative">
      <Badge
        variant="secondary"
        className="absolute left-2 top-1/2 -translate-y-1/2 h-9 font-semibold flex items-center justify-center"
      >
        Rp
      </Badge>
      <Input
        id={id}
        type="number"
        placeholder={placeholder}
        className="h-12 pl-12 my-1 text-sm md:text-md"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default function CatalogPage() {
  const [selectedValue, setSelectedValue] = useState("most-popular");
  const [dataSorted, setDataSorted] = useState<iProduct[]>();
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

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

  useEffect(() => {
    const filterByPrice = () => {
      if (minPrice === "" || maxPrice === "") return;

      const filtered =
        products?.filter((p) => {
          const price = p.price ?? 0;
          return price >= minPrice && price <= maxPrice;
        }) || [];

      setDataSorted(filtered);
    };

    const timer = setTimeout(() => {
      filterByPrice();
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedValue, maxPrice, minPrice, products]);

  if (isLoadingProducts) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <MainLayout>
        <section className="md:p-0 md:pt-0 pt-6 w-full">
          <h2 className="w-full text-[32px] font-bold ">Catalog</h2>
          <div className="flex md:gap-5 items-start pt-2 md:pt-5 pb-12">
            <div className="hidden md:flex flex-col md:w-66.5 border border-neutral-300 rounded-2xl">
              <div className="p-5  ">
                <h3 className="text-base font-bold mb-3">FILTER</h3>
                <h4 className="text-base font-semibold mb-2">Categories</h4>
                {/* checkbox list */}
                <CheckboxAll
                  items={categories?.map((category) => category.name) ?? []}
                  onChange={handleCheckedItems}
                />
              </div>
              <hr className="mb-5 text-neutral-300" />
              {/* price */}
              <div className="px-5 w-58.5">
                <h4 className="text-base font-semibold mb-2">Price</h4>
                <div className="grid gap-2">
                  <PriceInput
                    id="minimum-price"
                    placeholder="Minimum Price"
                    value={minPrice}
                    onChange={(val) => setMinPrice(val)}
                  />

                  <PriceInput
                    id="maximum-price"
                    placeholder="Maximum Price"
                    value={maxPrice}
                    onChange={(val) => setMaxPrice(val)}
                  />
                </div>
              </div>

              <hr className="mt-5 text-neutral-300"></hr>
              <div className="p-5">
                <h4 className="text-base font-semibold mb-5">Rating</h4>
                <div className="flex flex-col gap-5">
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
                  Showing {dataSorted?.length ?? products?.length} products
                </p>

                {/* filter for mobile design */}

                <Sheet>
                  <SheetTrigger
                    asChild
                    className="flex justify-between rounded-xl gap-3 mb-4"
                  >
                    <Button className="h-11 md:hidden" variant="outline">
                      <p className="text-sm font-normal">Filter</p>
                      <ListFilter />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="[&>button]:hidden">
                    <div className="relative h-full flex flex-col">
                      <SheetClose
                        asChild
                        className="absolute left-[calc(100%+0.75rem)] top-2"
                      >
                        <Button
                          variant="outline"
                          className="rounded-full w-8 h-8"
                        >
                          <XIcon />
                        </Button>
                      </SheetClose>
                      <ScrollArea className="flex-1 h-[calc(100vh-4rem)] border m-4 rounded-2xl">
                        <div className="p-4 text-sm">
                          <h3 className="text-base font-bold mb-3">FILTER</h3>
                          <h4 className="text-sm font-semibold mb-3">
                            Categories
                          </h4>

                          <CheckboxAll
                            items={
                              categories?.map((category) => category.name) ?? []
                            }
                            onChange={handleCheckedItems}
                          />

                          <hr className="my-4 text-neutral-300" />

                          <div>
                            <h4 className="text-sm font-semibold mb-2">
                              Price
                            </h4>
                            <div className="grid gap-2">
                              <PriceInput
                                id="minimum-price"
                                placeholder="Minimum Price"
                                value={minPrice}
                                onChange={(val) => setMinPrice(val)}
                              />

                              <PriceInput
                                id="maximum-price"
                                placeholder="Maximum Price"
                                value={maxPrice}
                                onChange={(val) => setMaxPrice(val)}
                              />
                            </div>
                          </div>

                          <hr className="mt-5 text-neutral-300" />

                          <div className="p-5 text-sm">
                            <h4 className="text-sm font-semibold mb-5">
                              Rating
                            </h4>
                            <div className="flex flex-col gap-5">
                              {[5, 4, 3, 2, 1].map((star) => (
                                <div className="flex items-center" key={star}>
                                  <Checkbox
                                    id={`star${star}`}
                                    onCheckedChange={(checked) =>
                                      handleCheckedRatings(
                                        star,
                                        checked === true
                                      )
                                    }
                                  />
                                  <Star className="fill-[#FFAB0D] stroke-0 h-4 ml-1" />
                                  <Label htmlFor={`star${star}`}>{star}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </div>
                  </SheetContent>
                </Sheet>

                <div className="flex gap-3 items-center">
                  <p className="text-base font-bold hidden md:block">Sort</p>

                  <Select
                    value={selectedValue}
                    onValueChange={(value) => {
                      setSelectedValue(value);
                      handleChange(value);
                    }}
                  >
                    <SelectTrigger className="rounded-xl md:py-4 py-5.5 mb-4 md:mb-0 px-3 w-full md:w-42 text-sm md:text-md">
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

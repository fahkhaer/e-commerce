import Catalog from "@/components/layouts/Catalog";
import MainLayout from "@/components/layouts/MainLayout";
import Navbar from "@/components/layouts/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";

export default function Store() {
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
                  <h3 className="font-bold">Toko Barokah Jaya</h3>
                  <p className="text-neutral-700">Jakarta Selatan</p>
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

          <Catalog />
        </div>
      </MainLayout>
    </>
  );
}

import { BadgeCheck, Link, Star } from "lucide-react";

export default function Catalog() {
  return (
    <>
      {/* grid daftar produk */}
      <div className="w-full bg-white py-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
            {/* put card product here */}
            <div className="shadow-[0_0_20px_0_#CBCACA40]">
              {/* product image */}
              <div>
                <img
                  className="h-auto w-full"
                  src="productexample.png"
                  alt=""
                />
              </div>
              {/* product description */}
              <div className="p-3 ">
                <div
                  className="text-sm md:text-base hover:text-primary hover:scale-105 transition duration-500 block"
                >
                  Sneakers Court Minimalis
                </div>
                <p className="text-sm md:text-base font-bold py-1">Rp275.000</p>
                <div className="flex items-center">
                  <Star className="fill-[#FFAB0D] stroke-0 h-4" />
                  <div>
                    <span>4.9</span>
                    <span>・10 Sold </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <BadgeCheck className="fill-[#176FFB] stroke-white h-4.5" />
                  <div>Toko Barokah Jaya </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

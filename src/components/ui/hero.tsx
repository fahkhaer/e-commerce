import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

export default function HeroImage() {
  return (
    <>
      <div className="flex items-center w-full bg-[#F3D7A4] rounded-[16px] px-3 shadow-md gap-4 sm:pt-3">
        <div className="flex-shrink-0 w-1/2 md:w-1/3 flex justify-center  md:mb-0">
          <Image
            className="object-cover rounded-lg "
            src="/hero.png"
            alt=""
            width={288}
            height={184}
            priority
          />
        </div>

        <div className="w-1/2 md:w-2/3 ">
          <h1 className="text-base md:text-[56px] font-bold text-[#553E32] ">
            NEW COLLECTION
          </h1>
          <p className="text-[10px] md:text-2xl font-semibold text-[#553E32] mb-6">
            {`Stylish men’s apparel for every occasion`}
          </p>
          <div className="flex justify-start text-center items-center">
            <Link href="/detail-product/16">
              <Button className=" h-7 md:h-12 w-23 md:w-45 mb-5">
                Get Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

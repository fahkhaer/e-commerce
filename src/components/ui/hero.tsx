import Image from "next/image";
import { Button } from "./button";

export default function HeroImage() {
  return (
    <>
      <div
        id="containerNewCollection"
        className="flex items-center w-full bg-[#F3D7A4] rounded-[16px] shadow-md gap-4"
      >
        <div className="flex-shrink-0 w-1/2 md:w-1/3 flex justify-center md:mb-0">
          <Image
            className=" md:h-72 object-cover rounded-lg w-auto h-auto"
            src="/hero.png"
            alt=""
            width={100}
            height={100}
            priority
          />
        </div>

        <div className="w-1/2 md:w-2/3">
          <h1 className="text-base md:text-[56px] font-bold text-[#553E32]">
            NEW COLLECTION
          </h1>
          <p className="text-[10px] md:text-2xl font-semibold text-[#553E32] mb-6">
            Stylish men’s apparel for every occasion
          </p>
          <div className="flex justify-start text-center items-center">
            <a href="#">
              <Button className="h-12 md:w-45">Get Now</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

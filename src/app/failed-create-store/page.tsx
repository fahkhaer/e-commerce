import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SuccessCreate() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex-col place-items-center px-6 text-center ">
        <Image
          src="/failed-create-shop.png"
          alt="failed-create-shop"
          width={200}
          height={200}
          className="rounded-xl"
          priority
        />
        <p className="text-lg font-bold mt-4 md:mt-8 ">Couldn’t Create Store</p>
        <p className="text-neutral-700 py-1">
          {`Something went wrong while creating your store. Please check your details and try again.`}
        </p>
        <Link href="/open-store">
          <Button className="w-70 md:w-76.5 h-12 mt-4 md:mt-7">
            Back to Form
          </Button>
        </Link>
      </div>
    </div>
  );
}

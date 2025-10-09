import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SuccessCreate() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex-col place-items-center px-6 text-center ">
        <Image
          src="/success-create-shop.png"
          alt="success-create"
          width={200}
          height={200}
          className="rounded-xl"
          priority
        />
        <p className="text-lg font-bold mt-4 md:mt-8 ">Your Store is Ready!</p>
        <p className="text-neutral-700 py-1">
          {`Store created! Add products and start selling today.`}
        </p>
        <Link href="/seller-home">
          <Button className="w-70 md:w-76.5 h-12 mt-4 md:mt-7">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}

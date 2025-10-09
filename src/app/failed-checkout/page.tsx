import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FailedCheckout() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex-col place-items-center px-6 text-center ">
        <Image
          src="/failed-checkout.png"
          alt="failed-checkout"
          width={200}
          height={200}
          className="rounded-xl"
          priority
        />
        <p className="text-lg font-bold mt-4 md:mt-8">
          Oops, something went wrong
        </p>
        <p className="text-neutral-700 py-1">
          {`Something went wrong during checkout. Please review your details and retry.`}
          .
        </p>

        <Link href="/">
          <Button className="w-70 md:w-76.5 h-12 mt-4 md:mt-7">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SuccessCheckout() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex-col place-items-center px-6 text-center ">
        <Image
          src="/success-checkout.png"
          alt="success-checkout"
          width={200}
          height={200}
          className="rounded-xl"
          priority
        />
        <p className="text-lg font-bold mt-4 md:mt-8">
          Order Placed Successfully!
        </p>
        <p className="text-neutral-700 py-1">
          {`We’ve received your order and will notify you once it’s shipped`}.{" "}
        </p>
        <Link href="/buyer-home">
          <Button className="w-70 md:w-76.5 h-12 mt-4 md:mt-7">
            Go to My Orders
          </Button>
        </Link>
      </div>
    </div>
  );
}

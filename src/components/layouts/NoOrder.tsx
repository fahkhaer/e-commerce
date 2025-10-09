import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NoOrder() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex-col place-items-center px-6 text-center ">
        <Image
          src="/no-order.png"
          alt="no-order-yet"
          width={200}
          height={200}
          className="rounded-xl"
          priority
        />{" "}
        <p className="text-lg font-bold mt-4 md:mt-8">No Orders Yet</p>
        <p className="text-neutral-700 py-1">
          Once you place an order, you can see all your purchases right here.{" "}
        </p>
        <Link href="/">
          <Button className="w-70 md:w-76.5 h-12 mt-4 md:mt-7">
            Start Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}

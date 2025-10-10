import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CartEmpty() {
  return (
    <div className="flex justify-end items-center mt-10  ">
      <div className="flex-col place-items-center px-6 text-center ">
        <Image
          src="/cart-empty.png"
          alt="cart-empty-yet"
          width={200}
          height={200}
          className="rounded-xl"
          priority
        />{" "}
        <p className="text-lg font-bold mt-4 md:mt-8">Your Cart is Empty</p>
        <p className="text-neutral-700 py-1">
          Your cart is waiting. Add your favorite items and come back to
          checkout.
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

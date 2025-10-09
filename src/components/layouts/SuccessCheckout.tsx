import Image from "next/image";
import { Button } from "../ui/button";
import MainLayout from "./MainLayout";

export default function SuccessCheckout() {
  return (
    <MainLayout>
        <div className="flex-row">
      <Image
        src="/success-checkout.png"
        alt="success-checkout"
        width={200}
        height={200}
        className="rounded-xl"
        priority
      />{" "}
      <p className="text-lg font-bold">Order Placed Successfully!</p>
      <p className="text-neutral-700">
        {`We’ve received your order and will notify you once it’s shipped`}.{" "}
      </p>
      <Button className="md:w-[305px]">Go to My Orders</Button></div>
    </MainLayout>
  );
}

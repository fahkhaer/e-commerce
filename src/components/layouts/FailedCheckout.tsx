import Image from "next/image";
import { Button } from "../ui/button";
import MainLayout from "./MainLayout";

export default function FailedCheckout() {
  return (
    <MainLayout>
      <Image
        src="/failed-checkout.png"
        alt="failed-checkout"
        width={200}
        height={200}
        className="rounded-xl"
        priority
      />{" "}
      <p className="text-lg font-bold">Oops, something went wrong</p>
      <p className="text-neutral-700">
        {`Something went wrong during checkout. Please review your details and retry.`}
        .{" "}
      </p>
      <Button className="md:w-[305px]">Back to Home</Button>
    </MainLayout>
  );
}

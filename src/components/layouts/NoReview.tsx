import Image from "next/image";
import { Button } from "../ui/button";

export default function NoReview() {
  return (
    <div>
      <Image
        src="/no-review.png"
        alt="sneakers-court-minimalist"
        width={200}
        height={200}
        className="rounded-xl"
        priority
      />{" "}
      <p className="text-lg font-bold">No Reviews Yet</p>
      <p className="text-neutral-700">
        Start sharing your opinion to make this space more helpful.
      </p>
      <Button className="md:w-[305px]">Start Shopping</Button>
    </div>
  );
}

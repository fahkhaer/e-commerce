"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import OrderListBuyer from "@/components/layouts/OrderListBuyer";
import ReviewBuyerList from "@/components/layouts/ReviewBuyerList";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutButton from "@/components/ui/LogoutButton";
import Navbar from "@/components/layouts/Navbar";
import NoReview from "@/components/layouts/NoReview";
import NoOrder from "@/components/layouts/NoOrder";

export default function ReviewBuyer() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const [activeMenu, setActiveMenu] = useState<"orders" | "reviews">("orders");

  useEffect(() => {
    if (tab === "reviews") {
      setActiveMenu("reviews");
    }
  }, [tab]);

  return (
    <>
      <Navbar />
      <div className="flex pb-20 sm:px-4 md:px-30 md:py-10 bg-gray-50">
        {/* Sidebar */}
        <Card className="w-[227px] min-h-[230px] p-6 border-r bg-white flex flex-col gap-6 mt-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/40" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">John Doe</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {/* Order List */}
            <Button
              variant={activeMenu === "orders" ? "secondary" : "ghost"}
              className="justify-start transition-all duration-300 ease-in-out"
              onClick={() => setActiveMenu("orders")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6663 1.89063V5.33274C11.6663 5.79945 11.6663 6.03281 11.7572 6.21107C11.8371 6.36787 11.9645 6.49535 12.1213 6.57525C12.2996 6.66608 12.533 6.66608 12.9997 6.66608H16.4418M11.6663 14.166H6.66634M13.333 10.8327H6.66634M16.6663 8.32287V14.3327C16.6663 15.7328 16.6663 16.4329 16.3939 16.9677C16.1542 17.4381 15.7717 17.8205 15.3013 18.0602C14.7665 18.3327 14.0665 18.3327 12.6663 18.3327H7.33301C5.93288 18.3327 5.23281 18.3327 4.69803 18.0602C4.22763 17.8205 3.84517 17.4381 3.60549 16.9677C3.33301 16.4329 3.33301 15.7328 3.33301 14.3327V5.66602C3.33301 4.26588 3.33301 3.56582 3.60549 3.03104C3.84517 2.56063 4.22763 2.17818 4.69803 1.9385C5.23281 1.66602 5.93288 1.66602 7.33301 1.66602H10.0095C10.621 1.66602 10.9267 1.66602 11.2144 1.73509C11.4695 1.79633 11.7134 1.89734 11.9371 2.03442C12.1893 2.18902 12.4055 2.40521 12.8379 2.83759L15.4948 5.49444C15.9271 5.92682 16.1433 6.14301 16.2979 6.3953C16.435 6.61898 16.536 6.86285 16.5973 7.11794C16.6663 7.40566 16.6663 7.71139 16.6663 8.32287Z"
                  stroke="#0A0D12"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Order List
            </Button>

            {/* Review */}
            <Button
              variant={activeMenu === "reviews" ? "secondary" : "ghost"}
              className="justify-start transition-all duration-300 ease-in-out"
              onClick={() => setActiveMenu("reviews")}
            >
              <Star />
              Review
            </Button>

            {/* Logout */}
            <Dialog>
              <LogoutButton />

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Logout</DialogTitle>
                  <DialogDescription>
                    You will need to sign in again to access your account
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button variant="destructive">Logout</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </nav>
        </Card>

        {/* Content */}
        <main className="flex-1 pl-6">
          {activeMenu === "orders" && <OrderListBuyer />}
          {activeMenu === "reviews" && (
            <div className="flex flex-col gap-4">
              <ReviewBuyerList />
            </div>
          )}
        </main>
      </div>
    </>
  );
}

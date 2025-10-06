"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import OrderListBuyer from "@/components/layouts/OrderListBuyer";
import ReviewBuyerList from "@/components/layouts/ReviewBuyerList";

export default function ReviewBuyer() {
  const [activeMenu, setActiveMenu] = useState<"orders" | "reviews">("orders");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 p-6 border-r bg-white flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/avatar.png"
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">John Doe</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          <Button
            variant={activeMenu === "orders" ? "secondary" : "ghost"}
            className="justify-start"
            onClick={() => setActiveMenu("orders")}
          >
            Order List
          </Button>
          <Button
            variant={activeMenu === "reviews" ? "secondary" : "ghost"}
            className="justify-start"
            onClick={() => setActiveMenu("reviews")}
          >
            Review
          </Button>
          <Button variant="destructive" className="justify-start">
            Logout
          </Button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {activeMenu === "orders" && (
          <div className="space-y-4">
            {/* Order list */}
            <OrderListBuyer />
          </div>
        )}

        {activeMenu === "reviews" && (
          <div className="flex flex-col gap-4">
            <ReviewBuyerList />
          </div>
        )}
      </main>
    </div>
  );
}

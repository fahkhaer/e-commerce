"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import { Star } from "lucide-react";

type OrderStatus = "processing" | "delivered" | "completed" | "cancelled";

interface Order {
  id: string;
  store: string;
  invoice: string;
  date: string;
  time: string;
  product: {
    name: string;
    price: number;
    qty: number;
    image: string;
  };
  total: number;
  status: OrderStatus;
}

const orders: Order[] = [
  {
    id: "1",
    store: "Toko Barokah Jaya",
    invoice: "INV1234567890",
    date: "22 Sept 2025",
    time: "17:22",
    product: {
      name: "Sneakers Court Minimalis",
      price: 100000,
      qty: 1,
      image: "/productexample.png",
    },
    total: 175000,
    status: "processing",
  },
  {
    id: "2",
    store: "Toko Barokah Jaya",
    invoice: "INV1234567890",
    date: "22 Sept 2025",
    time: "17:22",
    product: {
      name: "Sneakers Court Minimalis",
      price: 100000,
      qty: 1,
      image: "/productexample.png",
    },
    total: 175000,
    status: "delivered",
  },
  {
    id: "3",
    store: "Toko Barokah Jaya",
    invoice: "INV1234567890",
    date: "22 Sept 2025",
    time: "17:22",
    product: {
      name: "Sneakers Court Minimalis",
      price: 100000,
      qty: 1,
      image: "/productexample.png",
    },
    total: 175000,
    status: "completed",
  },
  {
    id: "4",
    store: "Toko Barokah Jaya",
    invoice: "INV1234567890",
    date: "22 Sept 2025",
    time: "17:22",
    product: {
      name: "Sneakers Court Minimalis",
      price: 100000,
      qty: 1,
      image: "/productexample.png",
    },
    total: 175000,
    status: "cancelled",
  },
];

export default function OrderListBuyer() {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((o) =>
    o.product.name.toLowerCase().includes(search.toLowerCase())
  );

  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState<number | null>(null);
  const [review, setReview] = useState("");

  return (
    <>
      <main className="flex-1 p-6">
        <h1 className="text-xl font-bold mb-4">Order List</h1>
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-6"
        />

        <Tabs defaultValue="all">
          <TabsList className="mb-6 w-full">
            <TabsTrigger value="all">All Order</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          {["all", "processing", "delivered", "completed", "cancelled"].map(
            (tab) => (
              <TabsContent key={tab} value={tab}>
                <div className="flex flex-col gap-4">
                  {filteredOrders
                    .filter((o) => tab === "all" || o.status === tab)
                    .map((order) => (
                      <Card key={order.id}>
                        <CardContent className="p-4 flex flex-col gap-4">
                          <div className="flex justify-between items-center">
                            <p className="text-sm font-medium">
                              {order.store} • {order.invoice} • {order.date},{" "}
                              {order.time}
                            </p>
                            <Badge
                              variant="outline"
                              className={
                                order.status === "processing"
                                  ? "bg-gray-100 text-gray-800"
                                  : order.status === "delivered"
                                  ? "bg-blue-100 text-blue-800"
                                  : order.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }
                            >
                              {order.status}
                            </Badge>
                          </div>

                          <div className="flex gap-4">
                            <Image
                              src={order.product.image}
                              alt={order.product.name}
                              width={80}
                              height={80}
                              className="rounded-md border"
                            />
                            <div className="flex flex-col justify-between">
                              <div>
                                <p className="font-semibold">
                                  {order.product.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {order.product.qty} x Rp
                                  {order.product.price.toLocaleString("id-ID")}
                                </p>
                              </div>
                              <p className="text-sm font-medium">
                                Total Payment: Rp
                                {order.total.toLocaleString("id-ID")}
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-end">
                            {order.status === "processing" && (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline">
                                    Cancel Order
                                  </Button>
                                </DialogTrigger>

                                <DialogContent className="sm:max-w-[425px]">
                                  <DialogHeader>
                                    <DialogTitle>Cancel Order</DialogTitle>
                                    <DialogDescription>
                                      <p className="font-bold text-black pt-3 pb-2">
                                        Cancel this order?
                                      </p>
                                      This action cannot be undone. If you
                                      continue, the order will be cancelled and
                                      you will no longer be able to recover it.
                                    </DialogDescription>
                                  </DialogHeader>

                                  <DialogFooter className="flex justify-end gap-2">
                                    <Button variant="outline">
                                      Keep Order
                                    </Button>
                                    <DialogClose asChild>
                                      <Button variant="destructive">
                                        Cancel Order
                                      </Button>
                                    </DialogClose>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            )}
                            {order.status === "delivered" && (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button>Complete Order</Button>
                                </DialogTrigger>

                                <DialogContent className="sm:max-w-[425px]">
                                  <DialogHeader>
                                    <DialogTitle>Complete Order</DialogTitle>
                                    <DialogDescription>
                                      <p className="font-bold text-black pt-3 pb-2">
                                        Mark this order as completed?{" "}
                                      </p>
                                      Once confirmed, this order will be closed
                                      and cannot be changed.
                                    </DialogDescription>
                                  </DialogHeader>

                                  <DialogFooter className="flex justify-end gap-2">
                                    <DialogClose asChild>
                                      <Button
                                        variant="outline"
                                        className="w-34"
                                      >
                                        Back
                                      </Button>
                                    </DialogClose>
                                    <Button className="w-34">
                                      Complete Order
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            )}
                            {order.status === "completed" && (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline">Give Review</Button>
                                </DialogTrigger>

                                <DialogContent className="sm:max-w-[425px]">
                                  <DialogHeader>
                                    <DialogTitle>Give Review</DialogTitle>
                                  </DialogHeader>

                                  <div className="flex flex-col items-center mt-2 space-y-4">
                                    <div className="text-center font-medium">
                                      Give Rating
                                    </div>

                                    <div className="flex gap-1">
                                      {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                          key={star}
                                          onClick={() => setRating(star)}
                                          onMouseEnter={() => setHover(star)}
                                          onMouseLeave={() => setHover(null)}
                                          className={`h-8 w-8 cursor-pointer transition-colors ${
                                            star <= (hover ?? rating)
                                              ? "fill-yellow-400 text-yellow-400"
                                              : "text-gray-400"
                                          }`}
                                        />
                                      ))}
                                    </div>

                                    <Textarea
                                      placeholder="Write your review here"
                                      value={review}
                                      onChange={(e) =>
                                        setReview(e.target.value)
                                      }
                                      className="h-24 resize-none"
                                    />

                                    <Button className="w-full mt-2">
                                      Submit
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            )
          )}
        </Tabs>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <p>Showing 1 to 10 of 60 entries</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button size="sm" className="bg-black text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

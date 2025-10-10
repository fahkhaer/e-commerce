"use client";

import { useState, useEffect } from "react";
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
import { Star, SearchIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { iOrder, OrderItem } from "@/types/order.interface";
import { getMyOrders } from "@/services/orders";
import dayjs from "dayjs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CardOrderProps {
  items: OrderItem[];
  status: string;
  code: string;
  date: string;
}

const CardOrder: React.FC<CardOrderProps> = ({ items, status, code, date }) => {
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState<number | null>(null);
  const [review, setReview] = useState("");

  return items.map((item) => {
    const total = item.qty * item.priceSnapshot;
    return (
      <Card key={item.id} className="p-5">
        <CardContent className="px-0 flex flex-col gap-3" key={item.id}>
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">
              {`${item.shop.name} • ${code} • ${date}`}
            </p>
            <Badge
              variant="outline"
              className={
                status === "PAID"
                  ? "bg-gray-100 text-gray-800"
                  : status === "DELIVERED"
                  ? "bg-blue-100 text-blue-800"
                  : status === "COMPLETED"
                  ? "bg-green-100 text-green-800"
                  : status === "REFUNDED"
                  ? "bg-red-100 text-red-800"
                  : "bg-red-100 text-red-800"
              }
            >
              {status === "REFUNDED" ? "Refunded" : status}
            </Badge>
          </div>
          <hr />
          <div className="flex gap-4">
            <Image
              src={item.product.images[0]}
              alt={item.product.title}
              width={48}
              height={48}
              className="rounded-md border"
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-semibold text-sm">{item.product.title}</p>
                <p className="text-sm text-gray-500">
                  {item.qty} x Rp
                  {item.priceSnapshot.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-normal text-neutral-600">
                Total Payment
              </p>
              <p className="text-md leading-7.5 font-bold">
                Rp{total.toLocaleString("id-ID")}
              </p>
            </div>

            <div className="flex justify-end">
              {status === "PAID" && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="font-bold text-sm">
                      Cancel Order
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[425px] text-left">
                    <DialogHeader className="text-left">
                      <DialogTitle className="text-left">
                        Cancel Order
                      </DialogTitle>
                      <DialogDescription className="text-left">
                        <p className="font-bold text-black pt-3 pb-2">
                          Cancel this order?
                        </p>
                        This action cannot be undone. If you continue, the order
                        will be cancelled and you will no longer be able to
                        recover it.
                      </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="flex justify-end gap-2">
                      <Button variant="outline">Keep Order</Button>
                      <DialogClose asChild>
                        <Button variant="destructive">Cancel Order</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}

              {status === "DELIVERED" && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Complete Order</Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Complete Order</DialogTitle>
                      <DialogDescription>
                        <p className="font-bold text-black pt-3 pb-2">
                          Mark this order as completed?
                        </p>
                        Once confirmed, this order will be closed and cannot be
                        changed.
                      </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="flex justify-end gap-2">
                      <DialogClose asChild>
                        <Button variant="outline" className="w-34">
                          Back
                        </Button>
                      </DialogClose>
                      <Button className="w-34">Complete Order</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}

              {status === "COMPLETED" && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Give Review</Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Give Review</DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col items-center mt-2 space-y-4">
                      <div className="text-center font-medium">Give Rating</div>
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
                        onChange={(e) => setReview(e.target.value)}
                        className="h-24 resize-none"
                      />
                      <Button className="w-full mt-2">Submit</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  });
};

export default function OrderListBuyer() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("all");
  const itemsPerPage = 4;

  const { data, isLoading } = useQuery<iOrder[]>({
    queryKey: ["orders"],
    queryFn: () => getMyOrders(),
  });

  // Filter berdasarkan tab & pencarian
  const filteredOrders = data?.filter((order) => {
    const matchSearch = order.items.some((item) =>
      item.product.title.toLowerCase().includes(search.toLowerCase())
    );

    const matchTab =
      activeTab === "all"
        ? true
        : activeTab === "processing"
        ? order.paymentStatus === "PAID"
        : activeTab === "delivered"
        ? order.paymentStatus === "DELIVERED"
        : activeTab === "completed"
        ? order.paymentStatus === "COMPLETED"
        : order.paymentStatus === "REFUNDED";

    return matchSearch && matchTab;
  });

  // Pagination Logic
  const totalPages = Math.ceil((filteredOrders?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = filteredOrders?.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, activeTab]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="flex-1 p-6">
      <h1 className="text-xl font-bold mb-4">Order List</h1>

      {/* Search Input */}
      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 size-4" />
        <Input
          placeholder="Search order..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 h-11 rounded-lg border border-input bg-background focus-visible:ring-1 focus-visible:ring-ring w-full"
        />
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
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
              <div className="flex flex-col gap-3">
                {paginatedOrders?.length ? (
                  paginatedOrders.map((item) => {
                    const date = dayjs(item.createdAt).format(
                      "DD MMM YYYY, HH:mm"
                    );
                    return (
                      <CardOrder
                        items={item.items}
                        code={item.code}
                        status={item.paymentStatus}
                        date={date}
                        key={item.id}
                      />
                    );
                  })
                ) : (
                  <p className="text-sm text-gray-500">No orders found.</p>
                )}
              </div>
            </TabsContent>
          )
        )}
      </Tabs>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex  justify-between items-center mt-6 text-sm text-gray-500">
          <p>
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredOrders?.length || 0)} of{" "}
            {filteredOrders?.length || 0} entries
          </p>
          <Pagination className="flex-1">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className={
                    currentPage === 1 ? "opacity-50 pointer-events-none" : ""
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  className={
                    currentPage === totalPages
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </main>
  );
}

"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Image from "next/image";

export default function OrderList() {
  return (
    <div className="p-6 bg-muted/30 rounded-xl">

      {/* Filter + Search */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-600">📅 30 Days ago</div>
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="all">All Order</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        {/* All Orders */}
        <TabsContent value="all" className="space-y-4 mt-4">
          {/* Order Card 1 */}
          <Card className="border">
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 text-xs rounded bg-gray-100 font-medium">
                  New
                </span>
                <span className="text-sm text-gray-500">
                  INV12345567890 • 22 Sept 2025, 17:22
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 items-center">
                {/* Product */}
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/images/prod-1.png"
                    alt="Sneakers"
                    className="w-14 h-14 rounded-md object-cover"
                    width={100}
                    height={100}
                    priority
                  />
                  <div>
                    <p className="font-medium">Sneakers Court Minimalis</p>
                    <p className="text-sm text-gray-500">1 x Rp100.000</p>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm">Johndoe (081234567890)</p>
                  <p className="text-sm text-gray-500">
                    Kebon Jeruk, Jakarta Barat
                  </p>
                </div>

                {/* Shipping */}
                <div>
                  <p className="font-medium">Shipping</p>
                  <p className="text-sm">JNE</p>
                </div>
              </div>

              {/* Payment + Actions */}
              <div className="flex items-center justify-between pt-2 border-t">
                <p className="font-bold">Total Payment Rp175.000</p>
                <div className="flex gap-2">
                  <Button variant="outline">Reject Order</Button>
                  <Button className="bg-black text-white">
                    Accept Order
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Card 2 (Confirmed) */}
          <Card className="border">
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 font-medium">
                  Confirmed
                </span>
                <span className="text-sm text-gray-500">
                  INV12345567890 • 22 Sept 2025, 17:22
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/images/prod-1.png"
                    className="w-14 h-14 rounded-md object-cover"
                    alt="Product"
                    width={100}
                    height={100}
                    priority
                  />
                  <div>
                    <p className="font-medium">Sneakers Court Minimalis</p>
                    <p className="text-sm text-gray-500">1 x Rp100.000</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm">Johndoe (081234567890)</p>
                  <p className="text-sm text-gray-500">
                    Kebon Jeruk, Jakarta Barat
                  </p>
                </div>
                <div>
                  <p className="font-medium">Shipping</p>
                  <p className="text-sm">JNE</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <p className="font-bold">Total Payment Rp175.000</p>
                <Button className="bg-black text-white">Set Delivered</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <p>Showing 1 to 10 of 60 entries</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button
            variant="default"
            size="sm"
            className="bg-black hover:bg-black/80"
          >
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
    </div>
  );
}

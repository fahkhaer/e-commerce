"use client";

import { Calendar1Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Badge } from "../ui/badge";

export default function OrderList() {
  return (
    <div className="p-6 bg-muted/30 rounded-xl">
      {/* Filter + Search */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" className="h-12 radius-xl">
          <Calendar1Icon />
          30 Days ago
        </Button>
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
            <CardContent className="space-y-4">
              <div className="flex gap-2 items-center">
                <Badge variant="outline" className="h-8 font-semibold text-sm">
                  New
                </Badge>
                <span className="text-sm text-neutral-950">
                  INV12345567890 • 22 Sept 2025, 17:22
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 items-center">
                {/* Product */}
                <div className="flex items-center gap-3">
                  <Image
                    src="/productexample.png"
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
                  <p className="text-sm text-neutral-950">
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
                <div>
                  <p className="font-normal text-sm">Total Payment</p>
                  <p className="font-bold text-md"> Rp175.000</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Reject Order</Button>
                  <Button className="bg-black text-white">Accept Order</Button>
                </div>
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

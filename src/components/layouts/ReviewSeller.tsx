"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const reviews = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  product: "Basketball Shoes Dunk Master",
  rating: 4.9,
  totalReview: 100,
  image: "/productexample.png",
}));

export default function Reviews() {

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          <span>
            <span className="text-xl">4.9/ </span>
            <span className="text-neutral-600 text-lg ">5.0</span>
          </span>
        </div>
      </div>

      {/* Table */}
      <Card className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">No</TableHead>
              <TableHead className="text-left">Product Name</TableHead>
              <TableHead className="text-left">Rating</TableHead>
              <TableHead className="text-left">Total Review</TableHead>
              <TableHead className="text-left ">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((r) => (
              <TableRow key={r.id} className="text-center">
                <TableCell>{r.id}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Image
                    src={r.image}
                    alt={r.product}
                    width={40}
                    height={40}
                    className="rounded-md"
                    priority
                  />
                  <span>{r.product}</span>
                </TableCell>
                <TableCell className="text-left">
                  <div className="flex gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>{r.rating}</span>
                  </div>
                </TableCell>

                <TableCell className="text-left">{r.totalReview}</TableCell>
                <TableCell className="items-center flex-row justify-items-start">
                  <Button variant="outline" size="sm">
                    See All Review
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <span>Showing 1 to 10 of 60 entries</span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button size="sm" className="bg-black text-white">
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
      </Card>
    </div>
  );
}

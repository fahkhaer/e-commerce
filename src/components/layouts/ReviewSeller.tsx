"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const reviews = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  product: "Basketball Shoes Dunk Master",
  rating: 4.9,
  totalReview: 100,
  image: "/shoes.png",
}));

export default function Reviews() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          <span>4.9/5.0</span>
        </div>
        <Input
          placeholder="Search"
          className="w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <Card className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Total Review</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((r) => (
              <TableRow key={r.id}>
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
                <TableCell className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  {r.rating}
                </TableCell>
                <TableCell>{r.totalReview}</TableCell>
                <TableCell className="text-right">
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

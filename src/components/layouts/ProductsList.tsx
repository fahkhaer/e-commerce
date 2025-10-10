"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

export function ProductsList() {
  return (
    <div className="p-6 bg-muted/30 rounded-xl">
      {/* Table */}
      <div className="rounded-lg border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">No</TableHead>
              <TableHead>Product Info</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Row 1 */}
            <TableRow>
              <TableCell className="text-center">1</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Image
                    src="/productexample.png"
                    alt="Sneakers Court Minimalis"
                    className="w-12 h-12 rounded-md object-cover"
                    width={100}
                    height={100}
                    priority
                  />
                  <div>
                    <p className="font-medium">Sneakers Court Minimalis</p>
                    <span className="text-gray-500 text-xs">Shoes</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>Rp275.000</TableCell>
              <TableCell>40</TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-3">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-pink-500 hover:text-pink-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

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

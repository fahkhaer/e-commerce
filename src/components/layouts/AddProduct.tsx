"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ImagePlus } from "lucide-react";

export default function AddProductDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-black hover:bg-black/80 h-12 px-6 text-white">
          + Add Product
        </Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-[760px] max-h-[85vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Add Product
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-4 mt-4 pb-6">
          {/* Product Name */}
          <div>
            <Label className="pb-3">Product name</Label>
            <Input placeholder="Product name" />
          </div>

          {/* Category */}
          <div>
            <Label className="pb-3">Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="shirt">Shirt</SelectItem>
                <SelectItem value="pants">Pants</SelectItem>
                <SelectItem value="jacket">Jacket</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div>
            <Label className="pb-3">Price</Label>
            <Input placeholder="Price" type="number" />
          </div>

          {/* Stock */}
          <div>
            <Label className="pb-3">Stock</Label>
            <Input placeholder="Stock" type="number" />
          </div>

          {/* Description */}
          <div>
            <Label className="pb-3">Description</Label>
            <Textarea placeholder="Description" className="min-h-[100px]" />
          </div>

          {/* Photo Product */}
          <div>
            <Label className="block mb-2 font-medium">Photo Product</Label>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className="flex flex-col items-center justify-center border border-dashed rounded-lg p-3 text-sm text-gray-500 cursor-pointer hover:bg-gray-50"
                >
                  <ImagePlus className="mb-1 h-5 w-5" />
                  Photo {num}
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <Button
            type="submit"
            className="w-full bg-black hover:bg-black/80 h-11"
          >
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

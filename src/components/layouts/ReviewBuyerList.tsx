"use client";

import { useState } from "react";
import Image from "next/image";
import { SearchIcon, Star, StoreIcon } from "lucide-react";
import { Input } from "../ui/input";

interface Review {
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
  rating: number;
  comment: string;
}

const reviews: Review[] = [
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
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper tellus quam congue id. At neque massa ultrices ultrices nulla aliquet.",
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
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper tellus quam congue id. At neque massa ultrices ultrices nulla aliquet.",
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
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper tellus quam congue id. At neque massa ultrices ultrices nulla aliquet.",
  },
];

export default function ReviewBuyerList() {
  const [search, setSearch] = useState("");

  const filteredReviews = reviews.filter((r) =>
    r.product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Content */}
      <main className="flex-1 p-6 ">
        <h1 className="text-2xl font-bold mb-6">Review</h1>

        {/* Search */}
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 size-4" />
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 h-11 rounded-lg border border-input bg-background focus-visible:ring-1 focus-visible:ring-ring w-full"
          />
        </div>

        {/* List Review */}
        <div className="flex flex-col gap-3">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-sm border p-4"
            >
              {/* Header */}
              <div className="flex  text-sm mb-2">
                <StoreIcon />
                <span className="flex items-center pl-1 gap-1">
                  {review.store} ・
                </span>
                <span>{review.invoice} ・</span>
                <span>
                  {review.date}, {review.time}
                </span>
              </div>
              <hr />

              {/* Product */}
              <div className="flex items-center gap-4 my-3">
                <Image
                  src={review.product.image}
                  alt={review.product.name}
                  width={64}
                  height={64}
                  className="rounded-md border"
                />
                <div>
                  <p className="font-semibold text-sm">{review.product.name}</p>
                  <p className="text-sm font-normal text-gray-500">
                    {review.product.qty} x Rp
                    {review.product.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <hr />

              {/* Review Content */}
              <div>
                <p className="font-semibold text-sm my-1 leading-7">
                  My Review
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    // <NoReview/> // if nothing review
  );
}

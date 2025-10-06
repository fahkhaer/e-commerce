"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

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
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md border px-4 py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* List Review */}
        <div className="flex flex-col gap-4">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-sm border p-4"
            >
              {/* Header */}
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span className="flex items-center gap-1">
                  🏬 {review.store}
                </span>
                <span>{review.invoice}</span>
                <span>
                  {review.date}, {review.time}
                </span>
              </div>

              {/* Product */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={review.product.image}
                  alt={review.product.name}
                  width={64}
                  height={64}
                  className="rounded-md border"
                />
                <div>
                  <p className="font-medium">{review.product.name}</p>
                  <p className="text-sm text-gray-500">
                    {review.product.qty} x Rp
                    {review.product.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Review Content */}
              <div>
                <p className="font-semibold mb-1">My Review</p>
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

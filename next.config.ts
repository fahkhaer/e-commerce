import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.macrumors.com",
      "artofcards.in", // ✅ tambahkan domain ini juga
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.macrumors.com",
      "artofcards.in",
      "images.unsplash.com"
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;

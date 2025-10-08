import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.macrumors.com",
      "artofcards.in",
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;

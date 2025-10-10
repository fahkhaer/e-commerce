import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.macrumors.com",
      "artofcards.in",
      "images.unsplash.com",
      "www.mobiledokan.com",
      "e-commerce-theta-liart-83.vercel.app"
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;

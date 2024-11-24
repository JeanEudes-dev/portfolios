import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  basePath: "/portfolios", // Replace <repository-name> with your repo name
  images: {
    unoptimized: true, // Ensures images work in a static export
  },
};

export default nextConfig;

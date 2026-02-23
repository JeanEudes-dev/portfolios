import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolios",
  assetPrefix: "/portfolios",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

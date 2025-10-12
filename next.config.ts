import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  experimental: {
    optimizeCss: true,
  },
  images: {
    unoptimized: true,
  },
  compress: true,
};

export default nextConfig;

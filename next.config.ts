import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  experimental: {
    // Modern bundling optimizations
    optimizePackageImports: [
      'framer-motion',
      'lucide-react', 
      'react-countup',
      '@calcom/embed-react'
    ],
    // Enable modern JS features
    esmExternals: true,
  },

  // Configure for modern browsers
  env: {
    BROWSERSLIST_ENV: 'modern'
  },
};

export default nextConfig;

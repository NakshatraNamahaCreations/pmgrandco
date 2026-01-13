// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
      // IMPORTANT !!
  // images: {
  //   unoptimized: true,
  // },
  trailingSlash: true, 
  images: {
    domains: ["pmgrbackend.onrender.com"],
  },
};

export default nextConfig;

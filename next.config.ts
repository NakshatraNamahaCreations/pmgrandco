// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  trailingSlash: true,     // IMPORTANT !!
  // images: {
  //   unoptimized: true,
  // },
  images: {
    domains: ["pmgrbackend.onrender.com"],
  },
};

export default nextConfig;

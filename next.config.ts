// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  reactStrictMode: true,
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.pmgrandco.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;

// next.config.ts
import { NextConfig } from "next";

const nextConfig = {
  output: "export",          // ✅ static HTML
  trailingSlash: true,       // ✅ required for static routing
  images: {
    unoptimized: true,       // ✅ required for static export
  },
};

export default nextConfig;

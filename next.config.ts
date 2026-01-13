// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // ✅ static export
  trailingSlash: true,     // ✅ required for static routing
  images: {
    unoptimized: true,     // ✅ required for static export
  },
};

export default nextConfig;

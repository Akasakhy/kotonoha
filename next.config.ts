import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kotonoha",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/research-projects",
  assetPrefix: "/research-projects",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

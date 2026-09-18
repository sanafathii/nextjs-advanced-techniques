import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "course-assets.s3.ir-tbz-sh1.arvanstorage.ir",
      },
    ],
  },
};

export default nextConfig;

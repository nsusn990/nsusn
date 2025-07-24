import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ci3.googleusercontent.com",
      },
      {
        protocol: 'https',
        hostname: '**', // allow images from any HTTPS domain
      },
    ],
  },
};

export default nextConfig;

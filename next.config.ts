import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  assetPrefix: '',
  basePath: '',
  images: {
    loader: "akamai",
    path: "/",
  },
};

export default nextConfig;

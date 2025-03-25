import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/bessediogportfolio", // Replace with your GitHub repository name
  assetPrefix: "/bessediogportfolio/", // Required for assets to load correctly
};

export default nextConfig;

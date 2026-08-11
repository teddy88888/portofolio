import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Fix: Turbopack 16.1.6 panics ("inner_of_uppers_lost_follower") causing white screen.
  // Use webpack bundler instead for stability.
turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

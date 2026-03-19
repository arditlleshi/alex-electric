import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    webpackMemoryOptimizations: true,
    prefetchInlining: true,
    appNewScrollHandler: true,
  },
  logging: {
    browserToTerminal: true,
    // 'error' — errors only (default)
    // 'warn'  — warnings and errors
    // true    — all console output
    // false   — disabled
  },
};

export default nextConfig;

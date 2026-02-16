import type { NextConfig } from "next";
import path from "path";

const tailwindcssPath = path.resolve(process.cwd(), "node_modules", "tailwindcss");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Force tailwindcss to resolve from project node_modules (fixes resolve from wrong cwd e.g. Desktop)
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias["tailwindcss"] = tailwindcssPath;
    return config;
  },
  turbopack: {
    resolveAlias: {
      tailwindcss: tailwindcssPath,
    },
  },
};

export default nextConfig;

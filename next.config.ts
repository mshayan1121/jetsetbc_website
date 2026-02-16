import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    config.resolve.alias["tailwindcss"] = path.join(__dirname, "node_modules", "tailwindcss");
    return config;
  },
};

export default nextConfig;

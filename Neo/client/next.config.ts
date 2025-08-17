import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/features/common/BaseImageLoad/index.tsx',
    domains: ['res.cloudinary.com', 'neoocular.qodeinteractive.com'],
    remotePatterns: [
      {
        hostname: "res.cloudinary.com"
      },
      {
        hostname: "neoocular.qodeinteractive.com"
      }
    ]
  }
};
export default nextConfig;

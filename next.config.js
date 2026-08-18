/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  allowedDevOrigins: process.env.NEXT_ALLOWED_DEV_ORIGIN
    ? [process.env.NEXT_ALLOWED_DEV_ORIGIN]
    : [],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compress: true,
  swcMinify: true,
};

export default nextConfig;

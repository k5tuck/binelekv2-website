import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Enable static exports for S3/CloudFront deployment
  output: 'export',

  // Image optimization - must be unoptimized for static export
  images: {
    unoptimized: true,
  },

  // Trailing slash for cleaner S3 paths
  trailingSlash: true,
};

export default withNextIntl(nextConfig);

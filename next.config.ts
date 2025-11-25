import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for Vercel optimization
  output: 'standalone',

  // Image optimization
  images: {
    domains: ['binelek.io'],
  },

  // Redirects for Solutions pages
  async redirects() {
    return [
      {
        source: '/solutions/ecommerce',
        destination: '/solutions',
        permanent: false,
      },
      {
        source: '/solutions/retail',
        destination: '/solutions',
        permanent: false,
      },
      {
        source: '/solutions/professional-services',
        destination: '/solutions',
        permanent: false,
      },
      {
        source: '/solutions/saas',
        destination: '/solutions',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // App directory is now stable in Next.js 14
  },
  transpilePackages: [
    '@neucircle/ui',
    '@neucircle/database',
    '@neucircle/auth',
    '@neucircle/ai',
    '@neucircle/email',
    '@neucircle/utils',
  ],
  images: {
    domains: [
      'localhost',
      'neucircle.com',
      'res.cloudinary.com',
      'images.unsplash.com',
    ],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig; 
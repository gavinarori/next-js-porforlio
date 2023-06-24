/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      
    ]
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  }
};

module.exports = nextConfig;

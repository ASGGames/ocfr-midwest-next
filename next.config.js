/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone', // Enable standalone output for better deployment
  images: {
    domains: ['localhost'],
  },
  experimental: {
    // Add any experimental features needed for Versatile
  },
}

module.exports = nextConfig
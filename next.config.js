/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'imageio.forbes.com',
      },
      {
        protocol: 'https',
        hostname: 'www.reuters.com',
      },
    ],
  },
  env: {
    X_MICROCMS_API_KEY: process.env.X_MICROCMS_API_KEY,
    SERVICE_DOMAIN: process.env.SERVICE_DOMAIN,
    TW_API_KEY: process.env.TW_API_KEY,
  },
}

module.exports = nextConfig

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
}

module.exports = nextConfig

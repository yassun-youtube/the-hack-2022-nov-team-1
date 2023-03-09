/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // TODO: turbopack対応待ち
    // fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
  async redirects() {
    return [
      {
        source: '/search/:slug',
        destination: '/news/:slug',
        permanent: false,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imageio.forbes.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.reuters.com',
        port: '',
        pathname: '/**',
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

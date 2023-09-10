const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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

/** @type {import('@sentry/nextjs').SentryWebpackPluginOptions} */
const sentryWebpackPluginOptions = {
  org: 'marvel-5b01af876',
  project: 'javascript-nextjs',
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)

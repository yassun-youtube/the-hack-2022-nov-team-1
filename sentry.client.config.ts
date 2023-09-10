import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1,
  tracePropagationTargets: ['localhost', /^\//],
})

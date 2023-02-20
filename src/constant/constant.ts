import type { HeaderNavType } from 'types/header'

export const LIST_TEXT_ARR = [
  {
    label: 'steadfast news',
    content: [
      {
        text: 'Top Stories',
        link: '/',
      },
      {
        text: 'Video',
        link: '/',
      },
    ],
  },
  {
    label: 'MORE FORM APP',
    content: [
      {
        text: 'sf.org',
        link: '/',
      },
      {
        text: 'next.js',
        link: '/',
      },
    ],
  },
]

export const FOOTER_NAV = [
  {
    label: 'steadfast news',
    link: '/',
  },
  {
    label: 'About',
    link: '/',
  },
  {
    label: 'Contact',
    link: '/',
  },
  {
    label: 'Customer Support',
    link: '/',
  },
  {
    label: 'Careers',
    link: '/',
  },
  {
    label: 'Teams & Conditions',
    link: '/',
  },
  {
    label: 'Privacy',
    link: '/',
  },
]

export const HEADER_NAV: HeaderNavType[] = [
  {
    text: 'Technology',
    link: '/category/technology',
  },
  {
    text: 'Science',
    link: '/category/science',
  },
  {
    text: 'Business',
    link: '/category/business',
  },
  {
    text: 'Politics',
    link: '/category/politics',
  },
]

export const NEWS_CATEGORIES = ['technology', 'science', 'business', 'politics']

export const cmsHeader = {
  'Content-Type': 'application/json',
  'X-MICROCMS-API-KEY': `${process.env.X_MICROCMS_API_KEY}`,
}

export const cmsBaseUrl = `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/news`

export const twApiBaseUrl = 'https://api.twitter.com/2/tweets/search'

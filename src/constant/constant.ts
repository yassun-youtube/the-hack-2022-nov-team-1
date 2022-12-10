import { HeaderNavType } from 'types/header'

export const LIST_TEXT_ARR = [
  {
    label: 'AP NEWS',
    content: [
      {
        text: 'string',
        link: 'https://example.com/',
      },
      {
        text: 'sssss',
        link: 'https://example.com/',
      },
    ],
  },
  {
    label: 'MORE FORM APP',
    content: [
      {
        text: 'AAAA',
        link: 'https://example.com/',
      },
      {
        text: 'CCCCCC',
        link: 'http://example.com/',
      },
    ],
  },
]

export const FOOTER_NAV = [
  {
    label: 'THE ASSOCIATED PRESS',
    link: 'http://example.com/',
  },
  {
    label: 'About',
    link: 'http://example.com/',
  },
  {
    label: 'Contact',
    link: 'http://example.com/',
  },
  {
    label: 'Customer Support',
    link: 'http://example.com/',
  },
  {
    label: 'Careers',
    link: 'http://example.com/',
  },
  {
    label: 'Teams & Conditions',
    link: 'http://example.com/',
  },
  {
    label: 'Privacy',
    link: 'http://example.com/',
  },
]

export const SNS = [
  // twitter
  {
    link: 'https://twitter.com/',
    imgPath: '/twitter.png',
    alt: 'twitter',
  },
  // facebook
  {
    link: 'https://ja-jp.facebook.com//',
    imgPath: '/facebook.png',
    alt: 'twitter',
  },
  // youtube
  {
    link: 'https://www.youtube.com/',
    imgPath: '/youtube.png',
    alt: 'twitter',
  },
  // instagram
  {
    link: 'https://www.instagram.com/',
    imgPath: '/instagram.webp',
    alt: 'twitter',
  },
]

export const HEADER_NAV: HeaderNavType[] = [
  {
    text: 'Technology',
    link: '/technology',
  },
  {
    text: 'Science',
    link: '/science',
  },
  {
    text: 'Business',
    link: '/business',
  },
  {
    text: 'Politics',
    link: '/politics',
  },
]

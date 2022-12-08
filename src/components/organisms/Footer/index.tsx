import Link from 'next/link'
import { FooterNavLabel } from '@components/atoms/FooterNav'
import SnsIcon from '@components/atoms/FooterNav/snsIcon'
import StoreIcon from '@components/atoms/FooterNav/storeIcon'
import Text from '@components/atoms/Text'
import { FooterLabelList } from '@components/molecules/FooterLabelList'

const LIST_TEXT_ARR = [
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

const FOOTER_NAV = [
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

const SNS = [
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

const Footer = () => {
  return (
    <footer className='bg-black p-14'>
      <nav>
        <ul className='flex gap-20'>
          {LIST_TEXT_ARR.map((el, index) => (
            <FooterLabelList
              key={index}
              label={el.label}
              content={el.content}
            />
          ))}
          <li className='w-[320px]'>
            <FooterNavLabel text='DOWNLOAD AP NEWS' />
            <Text textColor='text-white'>
              Content with the definitive source for global and local news
            </Text>
            <StoreIcon
              link='https://www.apple.com/jp/app-store/'
              src='/app-store.png'
              alt='App Store'
              width={250}
              height={50}
            />
            <StoreIcon
              link='https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-jp-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700012434507668_creativeid_416444421498_device_c&gclid=CjwKCAiAs8acBhA1EiwAgRFdw9Z-kN4Ry70MbQCyPK1mZL60xUB07ptf33d_o0-PiY8i4ZwS_MgT5xoCz2kQAvD_BwE&gclsrc=aw.ds'
              src='/google-play.png'
              alt='Google Play'
              width={300}
              height={50}
            />
          </li>
          <li>
            <FooterNavLabel text='FOLLOW APP' />
            <ul className='flex items-center gap-1 pt-2'>
              {SNS.map((el, index) => (
                <SnsIcon
                  key={index}
                  link={el.link}
                  src={el.imgPath}
                  alt={el.alt}
                  width={50}
                  height={50}
                />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      <nav className='mt-14 flex justify-between border-t border-solid border-white pt-10'>
        <ul className='flex items-center gap-3'>
          {FOOTER_NAV.map((item, index) => (
            <li
              key={index}
              className='text-[12px] text-white'>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Text textColor='text-white'>
          All contents ©︎ copyright 2022 The Assosiated Press. All rights reserved.
        </Text>
      </nav>
    </footer>
  )
}

export default Footer

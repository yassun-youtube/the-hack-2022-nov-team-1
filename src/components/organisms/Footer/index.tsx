import Link from 'next/link'
import { FooterNavLabel } from '@components/atoms/FooterNav'
import Icon from '@components/atoms/FooterNav/Icon'
import {
  AppleStoreIcon,
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@components/atoms/StoreIcon'
import FooterLabelList from '@components/molecules/FooterLabelList'
import { FOOTER_NAV, LIST_TEXT_ARR } from 'constant/constant'

const Footer = () => {
  return (
    <footer className='bg-black p-14'>
      <nav>
        <ul className='flex gap-20'>
          <FooterLabelList
            label={LIST_TEXT_ARR[0].label}
            contents={LIST_TEXT_ARR[0].content}
          />
          <li className='w-[320px]'>
            <FooterNavLabel text='DOWNLOAD APP' />
            <p className='mt-0.5 text-sm font-light leading-8 text-white'>
              Content with the definitive source for global and local news
            </p>
            <Link
              href='https://www.apple.com/app-store/'
              className='mt-3 block w-32'
              aria-label='app-store'>
              <AppleStoreIcon />
            </Link>
            <Link
              href='https://play.google.com/store/apps'
              className='mt-3 block w-32'
              aria-label='google-play'>
              <GooglePlayIcon />
            </Link>
          </li>
          <FooterLabelList
            label={LIST_TEXT_ARR[1].label}
            contents={LIST_TEXT_ARR[1].content}
          />
          <li>
            <FooterNavLabel text='FOLLOW APP' />
            <ol className='flex items-center gap-2 pt-2'>
              <li>
                <Icon
                  link='https://www.youtube.com/'
                  label='youtube'>
                  <YoutubeIcon
                    width={40}
                    height={40}
                  />
                </Icon>
              </li>
              <li>
                <Icon
                  link='https://twitter.com/'
                  label='twitter'>
                  <TwitterIcon
                    width={40}
                    height={40}
                  />
                </Icon>
              </li>
              <li>
                <Icon
                  link='https://www.instagram.com/'
                  label='instagram'>
                  <InstagramIcon
                    width={40}
                    height={40}
                  />
                </Icon>
              </li>
              <li>
                <Icon
                  link='https://facebook.com'
                  label='facebook'>
                  <FacebookIcon
                    width={40}
                    height={40}
                  />
                </Icon>
              </li>
            </ol>
          </li>
        </ul>
      </nav>
      <nav className='mt-14 flex justify-between border-t border-solid border-white pt-10'>
        <ul className='flex items-center gap-3'>
          {FOOTER_NAV.map((item, index) => (
            <li
              key={index}
              className='text-[12px] text-bright-gray'>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className='text-sm text-bright-gray'>
          <span>All contents ©︎ copyright 2022 steadfast news.</span>
          <span>All rights reserved.</span>
        </div>
      </nav>
    </footer>
  )
}

export default Footer

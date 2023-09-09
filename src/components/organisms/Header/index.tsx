import Link from 'next/link'

import AppLogo from '@/components/atoms/AppLogo'
import HeaderNavContainer from '@/components/molecules/HeaderNavContainer'
import SearchField from '@/components/molecules/SearchField'
import { HEADER_NAV } from '@/constant/constant'

function HeaderSection() {
  return (
    <header className='mx-10 h-[134px] pb-5 pt-7'>
      <div className='mb-7 w-fit'>
        <Link
          href='/'
          aria-label='top-page'>
          <AppLogo />
        </Link>
      </div>
      <div className='flex items-center justify-between font-sans font-semibold text-black'>
        <ul className='flex space-x-5'>
          {HEADER_NAV.map((item) => (
            <HeaderNavContainer
              key={item.text}
              {...item}
            />
          ))}
        </ul>
        <SearchField />
      </div>
    </header>
  )
}

export default HeaderSection

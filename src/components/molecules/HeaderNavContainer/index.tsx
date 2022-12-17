'use client'

import Link from 'next/link'
import { useScrollStore } from '@store/store'
import type { HeaderNavType } from 'types/header'

const HeaderNavContainer = ({ text, link }: HeaderNavType) => {
  const { setScrollAmount } = useScrollStore()

  const onClickHandler = () => {
    if (location.href.includes('/news/')) {
      setScrollAmount && setScrollAmount(0)
    }
  }
  return (
    <li>
      <Link
        href={link}
        onClick={onClickHandler}>
        {text}
      </Link>
    </li>
  )
}

export default HeaderNavContainer

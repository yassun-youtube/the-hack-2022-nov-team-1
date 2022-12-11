import Link from 'next/link'
import type { HeaderNavType } from 'types/header'

const HeaderNavContainer = ({ text, link }: HeaderNavType) => {
  return (
    <li>
      <Link href={link}>{text}</Link>
    </li>
  )
}

export default HeaderNavContainer

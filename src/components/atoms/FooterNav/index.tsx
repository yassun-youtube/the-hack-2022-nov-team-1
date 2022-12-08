import Link from 'next/link'

type FooterNavLabelType = {
  text: string
}

export type FooterNavLinkItemType = {
  text: string
  link: string
}

export const FooterNavLabel = ({ text }: FooterNavLabelType) => {
  return <p className='text-2xl text-white'>{text}</p>
}

export const FooterNavLinkItem = ({ link, text }: FooterNavLinkItemType) => {
  return (
    <li className='mt-2 text-sm text-white'>
      <Link href={link}>{text}</Link>
    </li>
  )
}

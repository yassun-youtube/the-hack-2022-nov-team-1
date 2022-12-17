import Link from 'next/link'

type FooterNavLabelType = {
  text: string
}

export type FooterNavLinkItemType = {
  text: string
  link: string
}

export const FooterNavLabel = ({ text }: FooterNavLabelType) => {
  return <p className='font-bold leading-5 text-bright-gray'>{text}</p>
}

export const FooterNavLinkItem = ({ link, text }: FooterNavLinkItemType) => {
  return (
    <li className='mt-0.5 text-sm font-light leading-8 text-bright-gray'>
      <Link href={link}>{text}</Link>
    </li>
  )
}

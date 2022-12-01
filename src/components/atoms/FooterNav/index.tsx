import Link from 'next/link'
import React from 'react'

type FooterNavLabelType = {
  text: string
}

export type FooterNavLinkItemType = {
  text: string
  link: string
}

export const FooterNavLabel = ({ text }: FooterNavLabelType) => {
  return <dt className='text-2xl text-white'>{text}</dt>
}

export const FooterNavLinkItem = ({ link, text }: FooterNavLinkItemType) => {
  return (
    <dd
      className='mt-2 text-sm text-white'
    >
      <Link href={link}>{text}</Link>
    </dd>
  )
}

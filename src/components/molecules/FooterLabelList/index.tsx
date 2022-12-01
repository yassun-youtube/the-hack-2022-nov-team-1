import React from 'react'
import {
  FooterNavLabel,
  FooterNavLinkItem,
  FooterNavLinkItemType,
} from '@components/atoms/FooterNav'

type LabelList = {
  label: string
  content: FooterNavLinkItemType[]
}

export const FooterLabelList = ({ label, content }: LabelList) => {
  return (
    <dl>
      <FooterNavLabel text={label} />
      {content.map((item, index) => (
        <FooterNavLinkItem
          key={index}
          link={item.link}
          text={item.text}
        />
      ))}
    </dl>
  )
}

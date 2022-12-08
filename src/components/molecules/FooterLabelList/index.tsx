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
    <li>
      <FooterNavLabel text={label} />
      <ul>
        {content.map((item, index) => (
          <FooterNavLinkItem
            key={index}
            link={item.link}
            text={item.text}
          />
        ))}
      </ul>
    </li>
  )
}

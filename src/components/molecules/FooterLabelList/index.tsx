import React from 'react'
import {
  FooterNavLabel,
  FooterNavLinkItem,
  FooterNavLinkItemType,
} from '@components/atoms/FooterNav'

type LabelList = {
  label: string
  contents: FooterNavLinkItemType[]
}

export const FooterLabelList = ({ label, contents }: LabelList) => {
  return (
    <li>
      <FooterNavLabel text={label} />
      <ul>
        {contents.map((item, index) => (
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

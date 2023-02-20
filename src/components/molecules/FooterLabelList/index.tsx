import React from 'react'
import type { FooterNavLinkItemType } from '@components/atoms/FooterNav'
import { FooterNavLabel, FooterNavLinkItem } from '@components/atoms/FooterNav'

type LabelList = {
  label: string
  contents: FooterNavLinkItemType[]
}

const FooterLabelList = ({ label, contents }: LabelList) => {
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

export default FooterLabelList

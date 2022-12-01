import React from 'react'
import { FooterNavLabel } from '@components/atoms/FooterNav'
import { FooterLabelList } from '@components/molecules/FooterLabelList'



export const Footer = () => {
  const LIST_TEXT_ARR = [
    {
      label: 'AP NEWS',
      content: [
        {
          text: 'string',
          link: 'http://example.com/',
        },
        {
          text: 'sssss',
          link: 'http://example.com/',
        },
      ]
    },
    {
      label: 'MORE FORM APP',
      content: [
        {
          text: 'AAAA',
          link: 'http://example.com/',
        },
        {
          text: 'CCCCCC',
          link: 'http://example.com/',
        },
      ]
    }
  ]
  return (
    <footer className='bg-black p-14'>
      <div className="flex gap-20">
        {LIST_TEXT_ARR.map((el, index) => (
          <FooterLabelList
            key={index}
            label={el.label}
            content={el.content}
          />
        ))}
        <dl>
          <FooterNavLabel text='DOWNLOAD AP NEWS' />
        </dl>
        <dl>
          <FooterNavLabel text='FOLLOW APP' />
        </dl>
      </div>
    </footer>
  )
}
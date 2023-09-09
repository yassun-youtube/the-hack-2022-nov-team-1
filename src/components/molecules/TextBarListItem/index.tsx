import Link from 'next/link'

import TimeAgoText from '@/components/atoms/TimeAgoText'

type TextBarListItem = {
  title: string
  publishedAt: string
  isVerticalLine?: boolean
  url: string
}

function TextBarListItem({
  title,
  publishedAt,
  isVerticalLine = true,
  url,
}: TextBarListItem) {
  return (
    <li
      className={`mr-2 max-w-[219px] ${
        isVerticalLine ? 'border-r-[1px] border-r-blue/10' : ''
      } py-14 pr-5`}>
      <Link href={url}>
        <p className='mb-3 line-clamp-3 font-sans font-medium leading-[26px] tracking-[-0.06em]'>
          {title}
        </p>
        <span className='font-robot text-xs font-black leading-4 text-black'>
          <TimeAgoText time={publishedAt} />
        </span>
      </Link>
    </li>
  )
}

export default TextBarListItem

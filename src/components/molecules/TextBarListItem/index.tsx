import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import Link from 'next/link'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

type TextBarListItem = {
  title: string
  publishedAt: string
  isVerticalLine?: boolean
  url: string
}

const TextBarListItem = ({ title, publishedAt, isVerticalLine = true, url }: TextBarListItem) => {
  return (
    <li
      className={`mr-2 max-w-[219px] ${
        isVerticalLine ? 'border-r-2 border-r-blue/10' : ''
      } py-14 pr-5`}>
      <Link href={url}>
        <p className={'mb-3 font-sans font-medium leading-[26px] tracking-[-0.06em] line-clamp-3'}>
          {title}
        </p>
        <span className={'text-sm font-light leading-4'}>
          {timeAgo.format(new Date(publishedAt))}
        </span>
      </Link>
    </li>
  )
}

export default TextBarListItem

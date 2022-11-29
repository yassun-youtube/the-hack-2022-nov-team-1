import Link from 'next/link'

type TextBarListItem = {
  text: string
  time: string
  isVerticalLine?: boolean
  url: string
}

const TextBarListItem = ({ text, time, isVerticalLine = true, url }: TextBarListItem) => {
  return (
    <li
      className={`mr-2 max-w-[219px] ${
        isVerticalLine ? 'border-r-2 border-r-blue/10' : ''
      } py-14 pr-5`}>
      <Link href={url}>
        <p className={'mb-3 font-sans font-medium leading-[26px] tracking-[-0.06em] line-clamp-3'}>
          {text}
        </p>
        <span className={'text-sm font-light leading-4'}>{time}</span>
      </Link>
    </li>
  )
}

export default TextBarListItem

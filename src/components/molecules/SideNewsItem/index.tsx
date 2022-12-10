import Link from 'next/link'
import SideNewsLabel from '@components/atoms/SideNewsLabel'
import SideNewsText from '@components/atoms/SideNewsText'

type SideNewsItem = {
  label: string
  text: string
  url: string
}

const SideNewsItem = ({label, text, url}: SideNewsItem) => {
  return (
    <Link
      href={url}
      prefetch={false}
    >
      <div className={'relative'}>
        <div className={'absolute left-0 top-0'}>
          <SideNewsLabel label={label}></SideNewsLabel>
        </div>
        <SideNewsText text={text}></SideNewsText>
      </div>
    </Link>
  )
}

export default SideNewsItem

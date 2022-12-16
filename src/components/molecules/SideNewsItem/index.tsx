import Link from 'next/link'
import SideNewsLabel from '@components/atoms/SideNewsLabel'
import SideNewsText from '@components/atoms/SideNewsText'

type SideNewsItem = {
  label: string
  text: string
  url: string
}

const SideNewsItem = ({ label, text, url }: SideNewsItem) => {
  return (
    <>
      <Link href={url}>
        <div className={'relative'}>
          <div className={'absolute left-0 top-0'}>
            <SideNewsLabel label={label} />
          </div>
          <SideNewsText text={text} />
        </div>
      </Link>
      <hr className={'w-16 text-lightgray/80'} />
    </>
  )
}

export default SideNewsItem

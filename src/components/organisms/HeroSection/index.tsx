import Image from 'next/image'
import Link from 'next/link'
import SideNewsItem from "@components/molecules/SideNewsItem"
import { newsItem } from 'types/newsItem'

type HeroSectionProps = {
  newsItem: newsItem
  sideNewsItems: newsItem[]
}

const HeroSection = ({ newsItem, sideNewsItems }: HeroSectionProps) => {
  return (
    <section className={'mx-10 mb-8 flex flex-col'}>
      <div className={'mt-0.5 h-16'}>
        <div className={'mb-3 h-2 w-16 bg-red'} />
        <p className={'font-sans font-bold'}>TOP STORIES</p>
      </div>
      <div className={'mx-24 '}>
        <Link href={'news/test'}>
          <div className={'relative mb-3 h-[355px] w-[624px]'}>
            <Image
              src={`${newsItem.imageSrc}`}
              alt={newsItem.description}
              fill
              priority
              sizes={'624px,355px'}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Link>
        <Link href={'news/test'}>
          <div className={'w-[624px]'}>
            <h1 className={'text-center text-2xl font-extrabold line-clamp-2'}>{newsItem.title}</h1>
            <span className={'my-2 block text-center text-sm leading-5'}>by {newsItem.author}</span>
            <h2 className={'text-center text-sm font-normal line-clamp-2'}>
              {newsItem.description}
            </h2>
          </div>
        </Link>
      </div>
      <div className={'ml-1.5 border-l-2 border-lightgray pl-1.5'}>
        <ul className={'py-3.5'}>
          {sideNewsItems.map((newsItem, index) =>
            <li key={newsItem.id} className={index > 0 ?'mt-8' : ''}>
              <SideNewsItem
                url={'news/test-news'}
                label={newsItem.sourceName}
                text={newsItem.title}
              ></SideNewsItem>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default HeroSection

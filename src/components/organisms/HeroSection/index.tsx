import Image from 'next/image'
import Link from 'next/link'

import Bar from '@/components/atoms/Bar'
import SideNewsItem from '@/components/molecules/SideNewsItem'

import type { newsItem } from '@/types/news-item'

type HeroSectionProps = {
  newsItem: newsItem
  sideNewsItems: newsItem[]
}

function HeroSection({ newsItem, sideNewsItems }: HeroSectionProps) {
  return (
    <section className='mx-10 mb-8 flex flex-col'>
      <div className='mt-0.5 h-16'>
        <Bar />
        <p className='font-sans font-bold'>TOP STORIES</p>
      </div>
      <div className='flex justify-evenly'>
        <div className='mt-3'>
          <Link href={`feature-news/${newsItem.id}`}>
            <div className='relative mb-3 h-[355px] w-[624px]'>
              <Image
                fill
                priority
                src={`${newsItem.imageSrc}`}
                alt={newsItem.description}
                sizes='624px,355px'
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
          <Link href={`feature-news/${newsItem.id}`}>
            <div className='w-[624px]'>
              <h1 className='line-clamp-2 text-center text-2xl font-extrabold'>
                {newsItem.title}
              </h1>
              <span className='my-2 block text-center text-sm leading-5'>
                by {newsItem.author}
              </span>
              <h2 className='line-clamp-2 text-center text-sm font-normal'>
                {newsItem.description}
              </h2>
            </div>
          </Link>
        </div>
        <div className='max-w-xs border-l-[1px] border-lightgray/50 pl-2.5'>
          <ul className='py-3.5'>
            {sideNewsItems.map((newsItem, index) => (
              <li
                key={newsItem.id}
                className={index > 0 ? 'mt-8' : ''}>
                <SideNewsItem
                  url={`feature-news/${newsItem.id}`}
                  label={newsItem.category?.name}
                  text={newsItem.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

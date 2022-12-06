'use client'
import ImageContainer from '@components/molecules/ImageContainer'
import ListItemContainer from '@components/molecules/ListItemContainer'
import { newsItem } from 'types/newsItem'

type TopPageNewsSectionProps = {
  featureNewsItem: newsItem[]
  newsItems: newsItem[]
}

const TopPageNewsSection = ({ featureNewsItem, newsItems }: TopPageNewsSectionProps) => {
  return (
    <section className={'flex justify-center'}>
      <div className={'my-24 h-[409px] w-[680px] bg-white'}>
        <div>
          <hr className={'mb-6 border-t-8 border-t-gray'} />
          <h1 className={'font-robot text-2xl font-bold leading-7 tracking-[0.03em] text-blue'}>
            TECHNOLOGY
          </h1>
          <div className={'mt-6 flex'}>
            <ImageContainer
              url={'news/meta'}
              paragraph={featureNewsItem[0].title}
              alt={featureNewsItem[0].description}
              src={featureNewsItem[0].imageSrc}
            />
            <ul className={'ml-10 flex-col'}>
              {newsItems.map((newsItem) => (
                <ListItemContainer
                  key={newsItem.id}
                  url={'news/mask1'}
                  title={newsItem.title}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopPageNewsSection

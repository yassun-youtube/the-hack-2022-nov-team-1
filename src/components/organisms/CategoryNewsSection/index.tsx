import ImageContainer from '@components/molecules/ImageContainer'
import ListItemContainer from '@components/molecules/ListItemContainer'
import { newsItem } from 'types/newsItem'

type TopPageNewsSectionProps = {
  newsItems: newsItem[]
  categoryName: string
}

const CategoryNewsSection = ({ categoryName, newsItems }: TopPageNewsSectionProps) => {
  return (
    <section className={'flex justify-center'}>
      <div className={'my-24 h-[409px] w-[680px] bg-white'}>
        <div>
          <hr className={'mb-6 border-t-8 border-t-gray'} />
          <h1 className={'font-robot text-2xl font-bold leading-7 tracking-[0.03em] text-blue'}>
            {categoryName.toUpperCase()}
          </h1>
          <div className={'mt-6 flex'}>
            <ImageContainer
              url={`news/${newsItems[0].id}`}
              paragraph={newsItems[0].title}
              alt={newsItems[0].description}
              src={newsItems[0].imageSrc}
            />
            <ul className={'ml-10 flex-col'}>
              {newsItems.map((newsItem, index) => {
                if (index !== 0 && index <= 5)
                  return (
                    <ListItemContainer
                      key={newsItem.id}
                      url={`news/${newsItem.id}`}
                      title={newsItem.title}
                    />
                  )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryNewsSection

import ImageContainer from '@components/molecules/ImageContainer'
import ListItemContainer from '@components/molecules/ListItemContainer'
import { getCategoryNews } from '@libs/cmsUtils'
import type { newsItem } from 'types/newsItem'

type TopPageNewsSectionProps = {
  categoryName: string
}

const CategoryNewsSection = async ({ categoryName }: TopPageNewsSectionProps) => {
  const categoryNewsItems: newsItem[] = await getCategoryNews(categoryName)

  return (
    <section className='flex justify-center'>
      <div className='my-24 h-[409px] w-[680px] bg-white'>
        <div>
          <hr className='mb-6 border-t-8 border-t-gray' />
          <h1 className='font-robot text-2xl font-bold leading-7 tracking-[0.03em] text-blue'>
            {categoryName.toUpperCase()}
          </h1>
          <div className='mt-6 flex'>
            <ImageContainer
              url={`feature-news/${categoryNewsItems[0].id}`}
              paragraph={categoryNewsItems[0].title}
              alt={categoryNewsItems[0].description}
              src={categoryNewsItems[0].imageSrc}
            />
            <ul className='ml-10 flex-col'>
              {categoryNewsItems.map((newsItem, index) => {
                if (index !== 0 && index <= 5)
                  return (
                    <ListItemContainer
                      key={newsItem.id}
                      url={`feature-news/${newsItem.id}`}
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

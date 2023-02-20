import Bar from '@components/atoms/Bar'
import Text from '@components/atoms/Text'
import ScrollManagement from '@components/container/scrollManagement'
import SearchNewsItemContainer from '@components/molecules/SearchNewsItemContainer'
import { getCategoryNews, getCategoryNewsPreload } from '@libs/cmsUtils'
import { NEWS_CATEGORIES } from 'constant/constant'
import type { newsItem } from 'types/newsItem'

type NewsCategoryPage = {
  params: { categoryName: string }
}
const NewsCategoryPage = async ({ params: { categoryName } }: NewsCategoryPage) => {
  getCategoryNewsPreload(categoryName)
  const categoryNewsList: newsItem[] = await getCategoryNews(categoryName)
  return (
    <div className='mb-8'>
      <ScrollManagement />
      <div className='mx-10'>
        <div className='my-5'>
          <Text textSize='text-2xl'>{decodeURIComponent(categoryName)}</Text>
          <div className='mt-2' />
          <Bar />
        </div>
        <div className='mb-10 h-[0.5px] w-full bg-gray/50' />
        <div className='flex'>
          <div className='w-[179px]' />
          <div className='flex-col'>
            {categoryNewsList.map((newsItem) => (
              <SearchNewsItemContainer
                key={newsItem.id}
                newsItem={newsItem}
                prefix='news'
              />
            ))}
          </div>
          <div className='w-[348px]' />
        </div>
      </div>
    </div>
  )
}

export default NewsCategoryPage

export const generateStaticParams = () =>
  NEWS_CATEGORIES.map((categoryName) => ({
    categoryName,
  }))

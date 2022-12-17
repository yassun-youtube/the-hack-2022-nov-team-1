import Bar from '@components/atoms/Bar'
import Text from '@components/atoms/Text'
import ScrollManagement from '@components/container/scrollManagement'
import FilteredNewsSection from '@components/organisms/FilteredNewsSection'
import { getFilteredNews } from '@libs/cmsUtils'
import { NEWS_CATEGORIES } from 'constant/constant'

type NewsCategoryPage = {
  params: { categoryName: string }
}
const NewsCategoryPage = async ({ params: { categoryName } }: NewsCategoryPage) => {
  const filteredNewsList = await getFilteredNews(categoryName)
  return (
    <>
      <ScrollManagement />
      <div className={'mx-10'}>
        <div className={'my-5'}>
          <Text textSize={'text-2xl'}>{decodeURIComponent(categoryName)}</Text>
          <div className={'mt-2'} />
          <Bar />
        </div>
        <div className={'mb-10 h-[0.5px] w-full bg-gray/50'} />
        <div className={'flex'}>
          <div className={'w-[179px]'} />
          <div className={'flex-col'}>
            <FilteredNewsSection newsItemList={filteredNewsList} />
          </div>
          <div className={'w-[348px]'} />
        </div>
      </div>
    </>
  )
}

export default NewsCategoryPage

export const generateStaticParams = () =>
  NEWS_CATEGORIES.map((categoryName) => ({
    categoryName,
  }))

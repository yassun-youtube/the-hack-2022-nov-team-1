import Bar from '@components/atoms/Bar'
import Text from '@components/atoms/Text'
import ScrollManagement from '@components/container/scrollManagement'
import FilteredNewsSection from '@components/organisms/FilteredNewsSection'
import { getQueryNewsCached } from '@libs/cmsUtils'

type NewsSearchPage = {
  params: { keyword: string }
}

const NewsSearchPage = async ({ params: { keyword } }: NewsSearchPage) => {
  const filteredNewsList = await getQueryNewsCached(keyword)
  return (
    <>
      <ScrollManagement />
      <div className={'mx-10'}>
        <div className={'my-5'}>
          <Text textSize={'text-2xl'}>{decodeURIComponent(keyword)}</Text>
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

export default NewsSearchPage

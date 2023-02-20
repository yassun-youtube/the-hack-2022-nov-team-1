import { Suspense } from 'react'
import Bar from '@components/atoms/Bar'
import QueryParamText from '@components/atoms/QueryParamText'
import Text from '@components/atoms/Text'
import ScrollManagement from '@components/container/scrollManagement'
import { SearchNewsItemContainer } from '@components/molecules/SearchNewsItemContainer'
import {
  getQueryNewsIdsCached,
  getQueryNewsIdsPreload,
  getSpecificNewsCached,
  getSpecificNewsPreload,
} from '@libs/cmsUtils'

export default async function NewsSearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const keyword =
    searchParams !== undefined && typeof searchParams.q === 'string' ? searchParams.q : ''
  getQueryNewsIdsPreload(keyword)
  const filteredNewsIdList = await getQueryNewsIdsCached(keyword)
  return (
    <>
      <ScrollManagement />
      <div className='mx-10'>
        <div className='my-5'>
          <Text textSize='text-2xl'>
            <QueryParamText />
          </Text>
          <div className='mt-2' />
          <Bar />
        </div>
        <div className='mb-10 h-[0.5px] w-full bg-gray/50' />
        <div className='flex'>
          <div className='w-[179px]' />
          <div className='flex-col'>
            {filteredNewsIdList.map((item: { id: string }) => (
              <Suspense
                key={item.id}
                fallback={<div className='mb-8 h-64 min-h-fit' />}>
                {/* @ts-expect-error Server Component */}
                <SearchNewsItem newsId={item.id} />
              </Suspense>
            ))}
          </div>
          <div className='w-[348px]' />
        </div>
      </div>
    </>
  )
}

async function SearchNewsItem({ newsId }: { newsId: string }) {
  getSpecificNewsPreload(newsId)
  const newsItem = await getSpecificNewsCached(newsId)

  return (
    <SearchNewsItemContainer
      newsItem={newsItem}
      prefix='news'
    />
  )
}

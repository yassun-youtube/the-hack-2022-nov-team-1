import Link from 'next/link'
import { Suspense } from 'react'
import Bar from '@components/atoms/Bar'
import QueryParamText from '@components/atoms/QueryParamText'
import Text from '@components/atoms/Text'
import TimeAgoText from '@components/atoms/TimeAgoText'
import ScrollManagement from '@components/container/scrollManagement'
import ImageContainer from '@components/molecules/ImageContainer'
import {
  getQueryNewsIdsCached,
  getQueryNewsIdsPreload,
  getSpecificNewsCached,
  getSpecificNewsPreload,
} from '@libs/cmsUtils'

type NewsSearchPageProps = {
  searchParams?: { [key: string]: string | string[] | undefined }
}
export default async function NewsSearchPage({ searchParams }: NewsSearchPageProps) {
  const keyword =
    searchParams !== undefined && typeof searchParams.q === 'string' ? searchParams.q : ''
  getQueryNewsIdsPreload(keyword)
  const filteredNewsIdList = await getQueryNewsIdsCached(keyword)
  return (
    <>
      <ScrollManagement />
      <div className={'mx-10'}>
        <div className={'my-5'}>
          <Text textSize={'text-2xl'}>
            <QueryParamText />
          </Text>
          <div className={'mt-2'} />
          <Bar />
        </div>
        <div className={'mb-10 h-[0.5px] w-full bg-gray/50'} />
        <div className={'flex'}>
          <div className={'w-[179px]'} />
          <div className={'flex-col'}>
            {filteredNewsIdList.map((item: { id: string }) => (
              <div
                className={''}
                key={item.id}>
                <Suspense fallback={<div className={'mb-8 h-64 min-h-fit'}></div>}>
                  {/* @ts-expect-error Async Server Component */}
                  <SearchNewsItem newsId={item.id} />
                </Suspense>
              </div>
            ))}
          </div>
          <div className={'w-[348px]'} />
        </div>
      </div>
    </>
  )
}

async function SearchNewsItem({ newsId }: { newsId: string }) {
  getSpecificNewsPreload(newsId)
  const newsItem = await getSpecificNewsCached(newsId)

  return (
    <div
      key={newsItem.id}
      className={'mb-8'}>
      <Link href={`/news/${newsItem.id}`}>
        <Text
          textSize='text-xl'
          fontWight={'font-semibold'}>
          {newsItem.title}
        </Text>
      </Link>
      <p className={'my-3 flex text-sm font-extralight leading-4'}>
        <span className={'pr-5 '}>By {newsItem.author}</span>
        <span>
          <TimeAgoText time={newsItem.updatedAt} />
        </span>
      </p>
      <div className={'flex'}>
        <ImageContainer
          src={newsItem.imageSrc}
          alt={newsItem.title}
          url={`/news/${newsItem.id}`}
        />
        <Link href={`/news/${newsItem.id}`}>
          <p className={'ml-6 w-[386px] leading-8 line-clamp-5'}>{newsItem.description}</p>
        </Link>
      </div>
    </div>
  )
}

'use client'

import { useEffect } from 'react'
import Bar from '@components/atoms/Bar'
import Flex from '@components/atoms/Flex/Index'
import { Contents } from '@components/atoms/Flex/contents'
import { Sidebar } from '@components/atoms/Flex/sidebar'
import Text from '@components/atoms/Text'
import TimeAgoText from '@components/atoms/TimeAgoText'
import { newsItem } from 'types/newsItem'

type NewsDetailPageClientProps = {
  tweetItems: string[]
  newsId: string
  newsItem: newsItem
}

const NewsDetailPageClient = ({ newsItem, tweetItems }: NewsDetailPageClientProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className='mt-5 px-10 pb-20'>
      <Text textSize='text-2xl'>{newsItem.title}</Text>
      <Flex alignItem='center my-3'>
        <span className={'mr-4 font-sans font-semibold'}>{`By ${newsItem.author}`}</span>
        <span>
          <TimeAgoText time={newsItem.updatedAt} />
        </span>
      </Flex>
      <Bar />
      <div className={'my-7 h-[0.5px] w-full bg-gray/50'} />
      <Flex>
        <Contents
          imageSrc={newsItem.imageSrc}
          alt={newsItem.title}
          body={newsItem.body}
        />
        <Sidebar tweetItems={tweetItems} />
      </Flex>
    </div>
  )
}

export default NewsDetailPageClient

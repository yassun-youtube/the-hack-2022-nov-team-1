'use client'

import { useEffect } from 'react'
import Flex from '@components/atoms/Flex/Index'
import { Contents } from '@components/atoms/Flex/contents'
import { Sidebar } from '@components/atoms/Flex/sidebar'
import Text from '@components/atoms/Text'
import timeAgoUtil from '@libs/timeAgo'
import { newsItem } from 'types/newsItem'

type NewsDetailPageClientProps = {
  newsItem: newsItem
}

const NewsDetailPageClient = ({ newsItem }: NewsDetailPageClientProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className='px-20'>
      <Text textSize='text-2xl'>{newsItem.title}</Text>
      <Flex alignItem='center'>
        <p>{newsItem.category}</p>
        <time
          className={`${newsItem.category !== null ? 'ml-5' : ''}`}
          dateTime={newsItem.updatedAt}>
          {timeAgoUtil(newsItem.updatedAt)}
        </time>
      </Flex>
      <Flex>
        <Contents
          imageSrc={newsItem.imageSrc}
          alt={newsItem.title}
          body={newsItem.body}
        />
        <Sidebar />
      </Flex>
    </div>
  )
}

export default NewsDetailPageClient

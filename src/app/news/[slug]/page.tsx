'use client'
import { useEffect, useLayoutEffect, useState } from 'react'
import Flex from '@components/atoms/Flex/Index'
import { Contents } from '@components/atoms/Flex/contents'
import { Sidebar } from '@components/atoms/Flex/sidebar'
import Text from '@components/atoms/Text'
import { getSpecificNews } from '@libs/connectCms'
import { newsItem } from 'types/newsItem'

const Page = () => {
  useEffect(() => {
    const getNewsItem = async () => {
      const newsContents = await getSpecificNews(pageId)
      setNewsItem(newsContents)
    }
    getNewsItem().catch((err) => console.log(err))
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const [newsItem, setNewsItem] = useState<newsItem>({
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    title: '',
    body: '',
    imageSrc: '',
    originalUrl: '',
    sourceName: '',
    dateModified: '',
    datePublished: '',
    description: '',
    author: '',
    category: null,
    tag: [],
  })
  const pageId = window.location.pathname.replace('/news/', '')

  // [年, 月, 日]の配列を作成
  const dateArr = [
    new Date(newsItem.updatedAt).getFullYear(),
    String(new Date(newsItem.updatedAt).getMonth() + 1).padStart(2, '0'),
    String(new Date(newsItem.updatedAt).getDate()).padStart(2, '0'),
  ]
  // YYYY-mm-dの形に整形
  const updateDate = dateArr.join('-')

  return (
    <div className='px-20'>
      <Text textSize='text-2xl'>{newsItem.title}</Text>
      <Flex alignItem='center'>
        <p>{newsItem.category}</p>
        <time
          className={`${newsItem.category !== null ? 'ml-5' : ''}`}
          dateTime={updateDate}
        >
          {updateDate}
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

export default Page

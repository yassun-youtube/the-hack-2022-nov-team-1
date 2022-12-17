import NewsDetailPageClient from '@components/templates/NewsDetailPage'
import { getLatestNewsIds, getSpecificNewsCached } from '@libs/cmsUtils'
import { getTweetsCached, preloadTweets } from '@libs/tweetUtil'
import { newsItem } from 'types/newsItem'

type NewsDetailPage = {
  params: { newsId: string }
}

const NewsDetailPage = async ({ params: { newsId } }: NewsDetailPage) => {
  const newsItem: newsItem = await getSpecificNewsCached(newsId)
  preloadTweets(newsItem.originalUrl)
  const tweetItems: string[] = await getTweetsCached(newsItem.originalUrl)
  return (
    <NewsDetailPageClient
      newsItem={newsItem}
      newsId={newsId}
      tweetItems={tweetItems}
    />
  )
}

export default NewsDetailPage

export const generateStaticParams = async () => {
  const newsItems: newsItem[] = await getLatestNewsIds()
  return newsItems.map((newsItem) => ({
    newsId: newsItem.id,
  }))
}

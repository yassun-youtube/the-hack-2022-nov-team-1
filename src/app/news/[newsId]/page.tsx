import NewsDetailPageClient from '@components/templates/NewsDetailPage'
import { getSpecificNews } from '@libs/cmsUtils'
import { getTweets } from '@libs/tweetUtil'
import { newsItem } from 'types/newsItem'

type NewsDetailPage = {
  params: { newsId: string }
}

const NewsDetailPage = async ({ params }: NewsDetailPage) => {
  const newsItem: newsItem = await getSpecificNews(params.newsId)
  const tweetItems: string[] = await getTweets(newsItem.originalUrl)
  return (
    <NewsDetailPageClient
      newsItem={newsItem}
      tweetItems={tweetItems}
    />
  )
}

export default NewsDetailPage

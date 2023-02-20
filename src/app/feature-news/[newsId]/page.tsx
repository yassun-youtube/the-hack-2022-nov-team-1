import NewsDetailSection from '@components/organisms/NewsDetailSection'
import { getLatestNewsIds, getSpecificNewsCached } from '@libs/cmsUtils'
import type { newsItem } from 'types/newsItem'

type NewsDetailPage = {
  params: { newsId: string }
}

const NewsDetailPage = async ({ params: { newsId } }: NewsDetailPage) => {
  const newsItem: newsItem = await getSpecificNewsCached(newsId)
  return <NewsDetailSection newsItem={newsItem} />
}

export default NewsDetailPage

export const generateStaticParams = async () => {
  const newsItems: newsItem[] = await getLatestNewsIds()
  return newsItems.map((newsItem) => ({
    newsId: newsItem.id,
  }))
}

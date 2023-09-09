import NewsDetailSection from '@/components/organisms/NewsDetailSection'
import { getSpecificNewsCached, getSpecificNewsPreload } from '@/libs/cms-utils'

import type { newsItem } from '@/types/news-item'

const NewsDetailPage = async ({
  params: { newsId },
}: {
  params: { newsId: string }
}) => {
  getSpecificNewsPreload(newsId)
  const newsItem: newsItem = await getSpecificNewsCached(newsId)
  return <NewsDetailSection newsItem={newsItem} />
}

export default NewsDetailPage

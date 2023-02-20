import NewsDetailSection from '@components/organisms/NewsDetailSection'
import { getSpecificNewsCached, getSpecificNewsPreload } from '@libs/cmsUtils'
import type { newsItem } from 'types/newsItem'

const NewsDetailPage = async ({ params: { newsId } }: { params: { newsId: string } }) => {
  getSpecificNewsPreload(newsId)
  const newsItem: newsItem = await getSpecificNewsCached(newsId)
  return <NewsDetailSection newsItem={newsItem} />
}

export default NewsDetailPage

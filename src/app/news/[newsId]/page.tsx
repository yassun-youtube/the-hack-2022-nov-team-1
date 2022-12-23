import NewsDetailSection from '@components/organisms/NewsDetailSection'
import { getSpecificNewsCached, getSpecificNewsPreload } from '@libs/cmsUtils'
import { newsItem } from 'types/newsItem'

type NewsDetailPage = {
  params: { newsId: string }
}

const NewsDetailPage = async ({ params: { newsId } }: NewsDetailPage) => {
  getSpecificNewsPreload(newsId)
  const newsItem: newsItem = await getSpecificNewsCached(newsId)
  return <NewsDetailSection newsItem={newsItem} />
}

export default NewsDetailPage

import NewsDetailPageClient from '@components/templates/NewsDetailPage'
import { getSpecificNews } from '@libs/cmsUtils'
import { newsItem } from 'types/newsItem'

type NewsDetailPage = {
  params: { newsId: string }
}

const NewsDetailPage = async ({ params }: NewsDetailPage) => {
  const newsItem: newsItem = await getSpecificNews(params.newsId)
  return <NewsDetailPageClient newsItem={newsItem} />
}

export default NewsDetailPage

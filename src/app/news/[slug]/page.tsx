import NewsDetailPageClient from '@components/templates/NewsDetailPage'
import { getSpecificNews } from '@libs/connectCms'
import { newsItem } from 'types/newsItem'

type NewsDetailPage = {
  params: { slug: string }
}

const NewsDetailPage = async ({ params }: NewsDetailPage) => {
  const { slug: pageId } = params
  const newsItem: newsItem = await getSpecificNews(pageId)
  return <NewsDetailPageClient newsItem={newsItem} />
}

export default NewsDetailPage

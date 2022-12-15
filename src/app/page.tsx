import ScrollManagement from '@components/container/scrollManagement'
import HeroSection from '@components/organisms/HeroSection'
import TextBarSection from '@components/organisms/TextBarSection'
import TopPageNewsSection from '@components/organisms/TopPageNewsSection'
import { getLatestNews } from '@libs/cmsUtils'

export default async function Home() {
  const news = await getLatestNews()
  return (
    <>
      <ScrollManagement />
      <HeroSection
        newsItem={news[0]}
        sideNewsItems={news.slice(1, 5)}
      />
      <TextBarSection newsItems={news.slice(1, 6)} />
      <TopPageNewsSection
        featureNewsItem={news.slice(7, 8)}
        newsItems={news.slice(5)}
      />
    </>
  )
}

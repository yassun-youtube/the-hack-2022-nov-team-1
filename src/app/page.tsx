import HeroSection from '@components/organisms/HeroSection'
import TextBarSection from '@components/organisms/TextBarSection'
import TopPageNewsSection from '@components/organisms/TopPageNewsSection'
import { getLatestNews } from '@libs/connectCms'

export default async function Home() {
  const news = await getLatestNews()
  return (
    <>
      <HeroSection newsItem={news[0]} sideNewsItems={news.slice(1,5)} />
      <TextBarSection newsItems={news.slice(1, 6)} />
      <TopPageNewsSection
        featureNewsItem={news.slice(7, 8)}
        newsItems={news.slice(5)}
      />
    </>
  )
}

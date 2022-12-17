import { Suspense } from 'react'
import ScrollManagement from '@components/container/scrollManagement'
import CategoryNewsSection from '@components/organisms/CategoryNewsSection'
import HeroSection from '@components/organisms/HeroSection'
import TextBarSection from '@components/organisms/TextBarSection'
import { getFilteredNews, getLatestNews } from '@libs/cmsUtils'
import { newsItem } from 'types/newsItem'

export default async function Home() {
  const news = await getLatestNews()
  const technologyNewsItems: newsItem[] = await getFilteredNews('technology')
  const scienceNewsItems: newsItem[] = await getFilteredNews('science')
  const businessNewsItems: newsItem[] = await getFilteredNews('business')
  const politicsNewsItems: newsItem[] = await getFilteredNews('politics')
  return (
    <>
      <ScrollManagement />
      <Suspense fallback={<p>Loading news...</p>}>
        <HeroSection
          newsItem={news[0]}
          sideNewsItems={news.slice(1, 5)}
        />
        <TextBarSection newsItems={news.slice(1, 6)} />
        <CategoryNewsSection
          categoryName={'technology'}
          newsItems={technologyNewsItems}
        />
        <CategoryNewsSection
          categoryName={'science'}
          newsItems={scienceNewsItems}
        />
        <CategoryNewsSection
          categoryName={'business'}
          newsItems={businessNewsItems}
        />
        <CategoryNewsSection
          categoryName={'politics'}
          newsItems={politicsNewsItems}
        />
      </Suspense>
    </>
  )
}

import ScrollManagement from '@components/container/scrollManagement'
import CategoryNewsSection from '@components/organisms/CategoryNewsSection'
import HeroSection from '@components/organisms/HeroSection'
import TextBarSection from '@components/organisms/TextBarSection'
import { getCategoryNews, getLatestNewsCached, getLatestNewsCachedPreload } from '@libs/cmsUtils'
import { newsItem } from 'types/newsItem'

export default async function Home() {
  getLatestNewsCachedPreload()
  const news = await getLatestNewsCached()
  const technologyNewsItems: newsItem[] = await getCategoryNews('technology')
  const scienceNewsItems: newsItem[] = await getCategoryNews('science')
  const businessNewsItems: newsItem[] = await getCategoryNews('business')
  const politicsNewsItems: newsItem[] = await getCategoryNews('politics')
  return (
    <>
      <ScrollManagement />
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
    </>
  )
}

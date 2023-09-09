import CategoryNewsSection from '@/components/organisms/CategoryNewsSection'
import HeroSection from '@/components/organisms/HeroSection'
import TextBarSection from '@/components/organisms/TextBarSection'
import { NEWS_CATEGORIES } from '@/constant/constant'
import {
  getLatestNewsCached,
  getLatestNewsCachedPreload,
} from '@/libs/cms-utils'

import type { newsItem } from '../types/news-item'

const getNews = async () => {
  getLatestNewsCachedPreload()
  const topNewsItems: newsItem[] = await getLatestNewsCached()

  const topNewsItem = topNewsItems.at(0)
  const sideNewsItems = topNewsItems.filter(
    (_, index) => index > 1 && index < 6,
  )
  const textBarSectionItem = topNewsItems.slice(6)
  return {
    sideNewsItems,
    topNewsItem,
    textBarSectionItem,
  }
}

export default async function Home() {
  const { textBarSectionItem, topNewsItem, sideNewsItems } = await getNews()
  if (!topNewsItem) return
  return (
    <div className='pb-16'>
      <HeroSection
        newsItem={topNewsItem}
        sideNewsItems={sideNewsItems}
      />
      <TextBarSection newsItems={textBarSectionItem} />
      {NEWS_CATEGORIES.map((category) => (
        <div key={category}>
          <CategoryNewsSection categoryName={category} />
        </div>
      ))}
    </div>
  )
}

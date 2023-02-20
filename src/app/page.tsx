import ScrollManagement from '@components/container/scrollManagement'
import CategoryNewsSection from '@components/organisms/CategoryNewsSection'
import HeroSection from '@components/organisms/HeroSection'
import TextBarSection from '@components/organisms/TextBarSection'
import { getLatestNewsCached, getLatestNewsCachedPreload } from '@libs/cmsUtils'
import { NEWS_CATEGORIES } from 'constant/constant'
import type { newsItem } from 'types/newsItem'

export default async function Home() {
  getLatestNewsCachedPreload()
  const topNewsItem: newsItem[] = await getLatestNewsCached()
  return (
    <div className='pb-16'>
      <ScrollManagement />
      <HeroSection
        newsItem={topNewsItem[0]}
        sideNewsItems={topNewsItem.slice(1, 5)}
      />
      <TextBarSection newsItems={topNewsItem.slice(6)} />
      {NEWS_CATEGORIES.map((category) => {
        return (
          <div key={category}>
            {/* @ts-expect-error Async Server Component */}
            <CategoryNewsSection categoryName={category} />
          </div>
        )
      })}
    </div>
  )
}

import TextBarListItem from '@/components/molecules/TextBarListItem'

import type { newsItem } from '@/types/news-item'

type TextBarSectionProps = {
  newsItems: newsItem[]
}

function TextBarSection({ newsItems }: TextBarSectionProps) {
  return (
    <section className='w-full'>
      <ul className='mx-10 flex justify-evenly border-t-[1px] border-t-blue/10'>
        {newsItems.map((newsItem, index) => {
          return (
            <TextBarListItem
              key={newsItem.id}
              title={newsItem.title}
              publishedAt={newsItem.publishedAt}
              url={`news/${newsItem.id}`}
              isVerticalLine={newsItems.length - 1 !== index}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default TextBarSection

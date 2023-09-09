import Bar from '@/components/atoms/Bar'
import Text from '@/components/atoms/Text'
import TimeAgoText from '@/components/atoms/TimeAgoText'
import Flex from '@/components/layout/Flex'
import NewsContentContainer from '@/components/molecules/NewsContentContainer'

import type { newsItem } from '@/types/news-item'

function NewsDetailSection({ newsItem }: { newsItem: newsItem }) {
  return (
    <div className='mt-5 px-10 pb-20'>
      <Text textSize='text-2xl'>{newsItem.title}</Text>
      <Flex alignItem='center my-3 font-sans'>
        <span className='mr-4'>{`By ${newsItem.author}`}</span>
        <span>
          <TimeAgoText time={newsItem.updatedAt} />
        </span>
      </Flex>
      <Bar />
      <div className='my-7 h-[0.5px] w-full bg-gray/50' />
      <Flex>
        <NewsContentContainer
          imageSrc={newsItem.imageSrc}
          alt={newsItem.title}
          body={newsItem.body}
        />
      </Flex>
    </div>
  )
}

export default NewsDetailSection

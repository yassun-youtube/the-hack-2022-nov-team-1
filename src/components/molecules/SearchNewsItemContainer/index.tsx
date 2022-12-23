import Link from 'next/link'
import Text from '@components/atoms/Text'
import TimeAgoText from '@components/atoms/TimeAgoText'
import ImageContainer from '@components/molecules/ImageContainer'
import { newsItem } from 'types/newsItem'

export const SearchNewsItemContainer = ({
  newsItem,
  prefix,
}: {
  newsItem: newsItem
  prefix: string
}) => (
  <div
    key={newsItem.id}
    className={'mb-8'}>
    <Link href={`/${prefix}/${newsItem.id}`}>
      <Text
        textSize='text-xl'
        fontWight={'font-semibold'}>
        {newsItem.title}
      </Text>
    </Link>
    <p className={'my-3 flex text-sm font-extralight leading-4'}>
      <span className={'pr-5 '}>By {newsItem.author}</span>
      <span>
        <TimeAgoText time={newsItem.updatedAt} />
      </span>
    </p>
    <div className={'flex'}>
      <ImageContainer
        src={newsItem.imageSrc}
        alt={newsItem.title}
        url={`/news/${newsItem.id}`}
        imageMaxHeight={200}
      />
      <Link href={`/${prefix}/${newsItem.id}`}>
        <p className={'ml-6 w-[386px] leading-8 line-clamp-5'}>{newsItem.description}</p>
      </Link>
    </div>
  </div>
)

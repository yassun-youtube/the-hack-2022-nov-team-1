import Link from 'next/link'
import Text from '@components/atoms/Text'
import ImageContainer from '@components/molecules/ImageContainer'
import timeAgoUtil from '@libs/timeAgo'
import { newsItem } from 'types/newsItem'

const FilteredNewsSection = ({ newsItemList }: { newsItemList: newsItem[] }) => {
  return (
    <>
      {newsItemList.map((newsItem) => (
        <div
          key={newsItem.id}
          className={'mb-8'}>
          <Link href={`/news/${newsItem.id}`}>
            <Text textSize='text-xl'>{newsItem.title}</Text>
          </Link>
          <p className={'my-3 flex text-sm font-light leading-4'}>
            <span className={'pr-5'}>By {newsItem.author}</span>
            <span>{timeAgoUtil(newsItem.updatedAt)}</span>
          </p>
          <div className={'flex'}>
            <ImageContainer
              src={newsItem.imageSrc}
              alt={newsItem.title}
              url={`/news/${newsItem.id}`}
            />
            <Link href={`/news/${newsItem.id}`}>
              <p className={'ml-6 w-[386px] leading-8 line-clamp-5'}>{newsItem.description}</p>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default FilteredNewsSection

import Link from 'next/link'
import ImageComponent from '@components/atoms/Image'
import ParagraphComponent from '@components/atoms/Paragraph'

type ImageContainer = {
  src: string
  alt: string
  paragraph?: string
  url: string
}

const ImageContainer = ({ src, alt, paragraph, url }: ImageContainer) => {
  return (
    <div className={'flex-col'}>
      <Link href={url}>
        <ImageComponent
          src={src}
          alt={alt}
        />
      </Link>
      {paragraph ?? (
        <Link href={url}>
          <ParagraphComponent paragraph={paragraph} />
        </Link>
      )}
    </div>
  )
}

export default ImageContainer

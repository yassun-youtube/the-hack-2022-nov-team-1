import Link from 'next/link'
import BlurImage from '@components/atoms/BlurImage'
import ParagraphComponent from '@components/atoms/Paragraph'

type ImageContainer = {
  src: string
  alt: string
  paragraph?: string
  url: string
  imageMaxHeight?: number
}

const ImageContainer = ({ src, alt, paragraph, url, imageMaxHeight }: ImageContainer) => {
  return (
    <div className={'flex-col'}>
      <Link href={url}>
        <BlurImage
          imageSrc={src}
          alt={alt}
          onBlur={false}
          maxHeight={imageMaxHeight}
        />
      </Link>
      <Link href={url}>
        <ParagraphComponent paragraph={paragraph ?? paragraph} />
      </Link>
    </div>
  )
}

export default ImageContainer

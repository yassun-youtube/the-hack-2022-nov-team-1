import Image from 'next/image'
import Link from 'next/link'
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
        <Image
          src={src}
          alt={alt}
          width={750}
          height={422}
          quality={10}
          style={{ width: '95%', height: 'auto' }}
        />
      </Link>
      <Link href={url}>
        <ParagraphComponent paragraph={paragraph ?? paragraph} />
      </Link>
    </div>
  )
}

export default ImageContainer

import Image from 'next/image'
import Link from 'next/link'

type Icon = {
  link: string
  src: string
  alt: string
  width: number
  height: number
}

const Icon = ({ link, src, alt, width, height }: Icon) => {
  return (
    <Link
      href={link}
      className='mt-3 block'
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  )
}

export default Icon

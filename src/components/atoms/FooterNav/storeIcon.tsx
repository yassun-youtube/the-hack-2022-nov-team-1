import Image from 'next/image'
import Link from 'next/link'

type StoreIcon = {
  link: string
  src: string
  alt: string
  width: number
  height: number
}

const StoreIcon = ({ link, src, alt, width, height }: StoreIcon) => {
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

export default StoreIcon

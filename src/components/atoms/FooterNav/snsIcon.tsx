import Image from 'next/image'
import Link from 'next/link'

type SnsIcon = {
  link: string
  src: string
  alt: string
  width: number
  height: number
}

const SnsIcon = ({ link, src, alt, width, height }: SnsIcon) => {
  return (
    <li>
      <Link href={link}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </Link>
    </li>
  )
}

export default SnsIcon

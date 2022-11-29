import Image from 'next/image'

type ImageComponent = {
  src: string
  alt: string
}

const ImageComponent = ({ src, alt }: ImageComponent) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={'375'}
      height={'268'}
    />
  )
}

export default ImageComponent

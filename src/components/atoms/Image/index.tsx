import Image from 'next/image'

type ImageComponent = {
  src: string
  alt: string
}

function ImageComponent({ src, alt }: ImageComponent) {
  return (
    <Image
      src={src}
      alt={alt}
      width={375}
      height={268}
      style={{ width: 'auto', height: 'auto' }}
    />
  )
}

export default ImageComponent

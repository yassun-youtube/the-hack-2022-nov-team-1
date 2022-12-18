'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Content = {
  imageSrc: string
  alt: string
  widthPercent?: string
  onBlur?: boolean
}

const cn = (isLoading: boolean) =>
  `duration-100 ease-in-out ${isLoading ? 'blur-sm' : 'blur-0 grayscale-0'}`

const BlurImage = ({ imageSrc, alt, onBlur = true, widthPercent = '100%' }: Content) => {
  const [isLoading, setLoading] = useState(onBlur)
  useEffect(() => {
    cn(isLoading)
  }, [isLoading])
  return (
    <Image
      src={imageSrc}
      alt={decodeURI(alt)}
      width={800}
      height={300}
      style={{ width: widthPercent, height: 'auto', objectFit: 'contain' }}
      quality={80}
      className={cn(isLoading)}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}

export default BlurImage

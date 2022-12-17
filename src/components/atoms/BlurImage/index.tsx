'use client'

import Image from 'next/image'
import { useState } from 'react'

type Content = {
  imageSrc: string
  alt: string
}

const BlurImage = ({ imageSrc, alt }: Content) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={800}
      height={300}
      priority
      style={{ width: '80%', height: 'auto', objectFit: 'contain' }}
      className={`duration-100 ease-in-out ${isLoading ? 'blur-sm' : 'blur-0 grayscale-0'}`}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}

export default BlurImage

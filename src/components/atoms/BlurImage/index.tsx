'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Content = {
  imageSrc: string
  alt: string
  onBlur?: boolean
  maxHeight?: number
}

const cn = (isLoading: boolean) =>
  `object-cover duration-100 ease-in-out ${isLoading ? 'blur-sm' : 'blur-0 grayscale-0'}`

const BlurImage = ({ imageSrc, alt, onBlur = true, maxHeight = 430 }: Content) => {
  const [isLoading, setLoading] = useState(onBlur)
  useEffect(() => {
    cn(isLoading)
  }, [isLoading])
  return (
    <div className='relative overflow-hidden'>
      <Image
        src={imageSrc}
        alt={decodeURI(alt)}
        width={800}
        height={430}
        quality={80}
        style={{ maxHeight }}
        className={`${cn(isLoading)}`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}

export default BlurImage

import Image from 'next/image'
import { useState } from 'react'
import sanitizeHtml from 'sanitize-html'

type Content = {
  imageSrc: string
  alt: string
  body: string
}

export const Contents = ({ imageSrc, alt, body }: Content) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <div className='w-4/5'>
      <Image
        src={imageSrc}
        alt={alt}
        width={800}
        height={300}
        style={{ width: '80%', height: 'auto', objectFit: 'contain' }}
        className={`duration-100 ease-in-out ${isLoading ? 'blur-sm' : 'blur-0 grayscale-0'}`}
        onLoadingComplete={() => setLoading(false)}
      />
      <div
        className='mt-10 text-[14px] leading-[calc(25/14)]'
        dangerouslySetInnerHTML={{
          __html: `${sanitizeHtml(body)}`,
        }}
      />
    </div>
  )
}

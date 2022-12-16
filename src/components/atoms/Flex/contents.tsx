import Image from 'next/image'
import sanitizeHtml from 'sanitize-html'

type Content = {
  imageSrc: string
  alt: string
  body: string
}

export const Contents = ({ imageSrc, alt, body }: Content) => {
  return (
    <div className='w-4/5'>
      <div className=''>
        <Image
          src={imageSrc}
          alt={alt}
          width={800}
          height={300}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
      <div
        className='mt-10 text-[14px] leading-[calc(25/14)]'
        dangerouslySetInnerHTML={{
          __html: `${sanitizeHtml(body)}`,
        }}
      />
    </div>
  )
}

import sanitizeHtml from 'sanitize-html'

import BlurImage from '@/components/atoms/BlurImage'

type Content = {
  imageSrc: string
  alt: string
  body: string
}

function NewsContentContainer({ imageSrc, alt, body }: Content) {
  return (
    <div className='w-4/5'>
      <BlurImage
        imageSrc={imageSrc}
        alt={alt}
      />
      <div className='flex'>
        <div className='md:m-24' />
        <div
          className='mt-10 text-[14px] leading-[calc(25/14)]'
          dangerouslySetInnerHTML={{
            __html: `${sanitizeHtml(body)}`,
          }}
        />
      </div>
    </div>
  )
}

export default NewsContentContainer

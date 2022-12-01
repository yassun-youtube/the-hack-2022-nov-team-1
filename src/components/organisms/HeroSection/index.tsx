import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className={'mx-10 mb-8 flex flex-col'}>
      <div className={'mt-0.5 h-16'}>
        <div className={'mb-3 h-2 w-16 bg-red'} />
        <p className={'font-sans font-bold'}>TOP STORIES</p>
      </div>
      <div className={'mx-24 '}>
        <Link href={'news/test'}>
          <div className={'relative mb-3 h-[355px] w-[624px]'}>
            <Image
              src={
                'https://imageio.forbes.com/specials-images/imageserve/6385d85ab2f4ae2b03db977a/0x0.jpg?format=jpg&crop=957,639,x0,y0,safe&width=1100'
              }
              alt={''}
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Link>
        <Link href={'news/test'}>
          <div className={'w-[624px]'}>
            <h1 className={'text-center text-2xl font-extrabold line-clamp-2'}>
              中国経済が低迷する中、ピンドゥオドゥオの創業者は150億ドルの資産を手に入れた
            </h1>
            <span className={'my-2 block text-center text-sm leading-5'}>
              by ByYue WangSenior Contributor
            </span>
            <h2 className={'text-center text-sm font-normal line-clamp-2'}>
              中国経済の逆風と民間企業への徹底的な取り締まりによって、多くのハイテク億万長者の運命は大きく揺らいでいるが、その中でも一人、ライバルに差をつけた大物経営者がいる。
            </h2>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection

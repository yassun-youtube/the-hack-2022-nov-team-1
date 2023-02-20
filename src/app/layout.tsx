import '../styles/dist.css'
import { Roboto } from '@next/font/google'
import dynamic from 'next/dynamic'
import Header from '@components/organisms/Header'

const roboto = Roboto({
  variable: '--roboto-font',
  weight: '100',
})

const Footer = dynamic(() => import('@components/organisms/Footer'))

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={roboto.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>steadfast-news</title>
      </head>
      <body className='text-black'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

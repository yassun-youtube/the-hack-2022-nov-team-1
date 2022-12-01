import '../styles/dist.css'
import { Roboto } from '@next/font/google'
import { Footer } from '@components/organisms/Footer'

const roboto = Roboto({
  variable: '--roboto-font',
  weight: '100',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={roboto.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={'text-black'}>
        {children}
        <Footer />
      </body>
    </html>
  )
}

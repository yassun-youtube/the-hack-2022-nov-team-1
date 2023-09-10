import '@/styles/dist.css'

import { Roboto } from 'next/font/google'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

import type { Metadata } from 'next'

const roboto = Roboto({
  variable: '--roboto-font',
  subsets: ['latin'],
  weight: '100',
})

export const metadata: Metadata = {
  title: 'steadfast-news',
  description: 'ファクトチェックされた記事をお届けします',
  viewport: 'width=device-width, initial-scale=1',
  icons: ['/favicon.svg'],
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body className={`${roboto.variable} text-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

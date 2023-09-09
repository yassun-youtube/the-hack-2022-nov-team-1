import { getSpecificNewsPreload } from '@/libs/cms-utils'

type NewsDetailLayoutProps = {
  params: { newsId: string }
  children: React.ReactNode
}

export default function NewsDetailLayout({
  children,
  params: { newsId },
}: NewsDetailLayoutProps) {
  getSpecificNewsPreload(newsId)
  return <>{children}</>
}
export const dynamic = 'error'

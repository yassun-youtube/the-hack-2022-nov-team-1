import { getQueryNewsPreload } from '@libs/cmsUtils'

type NewsSearchLayoutProps = {
  params: { keyword: string }
  children: React.ReactNode
}

export default function NewsDetailLayout({ children, params: { keyword } }: NewsSearchLayoutProps) {
  getQueryNewsPreload(keyword)
  return <>{children}</>
}

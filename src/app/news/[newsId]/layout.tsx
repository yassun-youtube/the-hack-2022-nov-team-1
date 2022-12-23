'use client'

import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return <>{children}</>
}

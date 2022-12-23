'use client'

import { useEffect } from 'react'

export default function FeatureNewsTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return <>{children}</>
}

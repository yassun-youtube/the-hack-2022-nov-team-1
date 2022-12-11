'use client'
import { useLayoutEffect } from 'react'

const Page = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return <></>
}

export default Page

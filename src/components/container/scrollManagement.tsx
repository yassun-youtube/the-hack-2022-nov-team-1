'use client'
import { useEffect } from 'react'
import { useScrollStore } from '@store/store'

const ScrollManagement = () => {
  const { scrollAmount, setScrollAmount } = useScrollStore()

  useEffect(() => {
    const scrollCapture = () => {
      if (
        location.href === location.origin + '/' ||
        location.href.includes('/search/') ||
        location.href.includes('/category/')
      ) {
        setScrollAmount && setScrollAmount(window.scrollY)
      }
    }
    window.addEventListener('scroll', scrollCapture)
    return () => {
      window.removeEventListener('scroll', scrollCapture)
    }
  }, [scrollAmount, setScrollAmount])

  useEffect(() => {
    if (
      location.href === location.origin + '/' ||
      location.href.includes('/search/') ||
      location.href.includes('/category/')
    ) {
      window.scrollTo({ top: scrollAmount })
    }
  })

  return <></>
}

export default ScrollManagement

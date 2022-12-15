'use client'
import { useEffect } from 'react'
import { useScrollStore } from '@store/store'

const ScrollManagement = () => {
  const { scrollAmount, setScrollAmount } = useScrollStore()

  useEffect(() => {
    if (
      location.href === location.origin ||
      location.href.includes('/search/') ||
      location.href.includes('/category/')
    ) {
      window.scrollTo({ top: scrollAmount })
    }
  })

  useEffect(() => {
    return () => {
      window.addEventListener('scroll', () => {
        if (
          location.href === location.origin ||
          location.href.includes('/search/') ||
          location.href.includes('/category/')
        ) {
          setScrollAmount && setScrollAmount(window.scrollY)
        }
      })
    }
  }, [scrollAmount, setScrollAmount])
  return <></>
}

export default ScrollManagement

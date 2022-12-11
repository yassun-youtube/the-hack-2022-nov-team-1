'use client'
import { useLayoutEffect } from 'react'
import { useScrollStore } from '@store/store'

const ScrollManagement = () => {
  const { scrollAmount, setScrollAmount } = useScrollStore()
  useLayoutEffect(() => {
    if (location.href === 'http://localhost:3000/') {
      window.scrollTo({ top: scrollAmount })
    }
    return () => {
      window.addEventListener('scroll', () => {
        if (location.href === 'http://localhost:3000/') {
          setScrollAmount && setScrollAmount(window.scrollY)
        }
      })
    }
  }, [scrollAmount, setScrollAmount])
  return <></>
}

export default ScrollManagement

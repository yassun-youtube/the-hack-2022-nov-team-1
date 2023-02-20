import { create } from 'zustand'

interface ScrollAmount {
  scrollAmount: number
  setScrollAmount: (value: number) => void
}

export const useScrollStore = create<ScrollAmount>((set) => ({
  scrollAmount: 0,
  setScrollAmount: (value) => set(() => ({ scrollAmount: value })),
}))

import { ReactNode } from 'react'

type TextComponent = {
  textColor?: 'text-blue' | 'text-white'
  textSize?: 'text-2xl' | 'text-xl' | 'text-sm'
  children?: ReactNode
}
const Text = ({ children, textColor, textSize }: TextComponent) => {
  return (
    <h1 className={`font-robot ${textSize} font-bold leading-7 tracking-[0.03em] ${textColor}`}>
      {children}
    </h1>
  )
}

export default Text

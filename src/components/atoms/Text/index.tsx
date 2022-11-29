type TextComponent = {
  textColor?: 'text-blue'
  textSize?: 'text-2xl' | 'text-xl'
  children?: React.ReactNode
}
const Text = ({ children, textColor, textSize }: TextComponent) => {
  return (
    <h1 className={`font-robot ${textSize} font-bold leading-7 tracking-[0.03em] ${textColor}`}>
      {children}
    </h1>
  )
}

export default Text

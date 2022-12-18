type TextComponent = {
  textColor?: 'text-blue' | 'text-white'
  textSize?: 'text-2xl' | 'text-xl' | 'text-sm'
  textFont?: 'font-robot' | 'font-sans'
  fontWight?: 'font-bold' | 'font-semibold'
  children?: React.ReactNode
}

const Text = ({
  children,
  textColor,
  textSize,
  textFont = 'font-sans',
  fontWight = 'font-bold',
}: TextComponent) => {
  return (
    <h1 className={`${textFont} ${textSize} ${fontWight} leading-7 tracking-[0.03em] ${textColor}`}>
      {children}
    </h1>
  )
}

export default Text

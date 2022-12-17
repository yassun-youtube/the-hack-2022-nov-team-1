type Flex = {
  children: React.ReactNode
  alignItem?: string
  justifyContent?: string
}

const Flex = ({ children, alignItem, justifyContent }: Flex) => {
  return (
    <div className={`flex ${'align-' + alignItem} ${'justify' + justifyContent}`}>{children}</div>
  )
}

export default Flex

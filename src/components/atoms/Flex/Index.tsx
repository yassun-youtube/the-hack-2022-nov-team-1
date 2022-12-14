type Flex = {
  children: React.ReactNode
  alignItem?: string
  justifyCotent?: string
}

const Flex = ({ children, alignItem, justifyCotent }: Flex) => {
  return (
    <div className={`flex ${'align-' + alignItem} ${'justify' + justifyCotent}`}>
      {children}
    </div>
  )
}

export default Flex

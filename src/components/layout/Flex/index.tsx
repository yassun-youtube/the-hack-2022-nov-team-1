const Flex = ({
  children,
  alignItem,
  justifyContent,
}: {
  children: React.ReactNode
  alignItem?: string
  justifyContent?: string
}) => {
  return (
    <div className={`flex ${'align-' + alignItem} ${'justify' + justifyContent}`}>{children}</div>
  )
}

export default Flex

type ParagraphComponent = {
  paragraph?: string
}

const ParagraphComponent = ({ paragraph }: ParagraphComponent) => {
  return (
    <p
      className={
        'mt-6 w-[314px] font-sans text-[15px] font-semibold leading-[25px] tracking-[-0.02em]'
      }>
      {paragraph}
    </p>
  )
}

export default ParagraphComponent

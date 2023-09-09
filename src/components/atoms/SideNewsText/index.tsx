type SideNewsTextComponent = {
  text: string
}

function SideNewsText({ text }: SideNewsTextComponent) {
  return (
    <>
      <div className='h-32 bg-zinc pl-0.5 pr-16 pt-10'>
        <span className='line-clamp-3 font-bold'>{text}</span>
      </div>
    </>
  )
}

export default SideNewsText

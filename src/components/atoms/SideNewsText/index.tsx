type SideNewsTextComponent = {
  text: string
}

const SideNewsText = ({ text }: SideNewsTextComponent) => {
  return (
    <>
      <div className={`h-32 bg-zinc pl-0.5 pr-16 pt-10`}>
        <span className={`font-bold`}>{text}</span>
      </div>
      <hr className={`w-16 text-lightgray`}></hr>
    </>
  )
}

export default SideNewsText
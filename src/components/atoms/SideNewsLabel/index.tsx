type SideNewsLabelComponent = {
  label: string
}
const SideNewsLabel = ({ label }: SideNewsLabelComponent) => {
  return (
    <div className='w-fit bg-blue py-1 px-2 text-center'>
      <p className='text-xs font-bold text-white'>{label}</p>
    </div>
  )
}

export default SideNewsLabel

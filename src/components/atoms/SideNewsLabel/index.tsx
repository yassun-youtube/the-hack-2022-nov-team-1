type SideNewsLabelComponent = {
  label: string
}
function SideNewsLabel({ label }: SideNewsLabelComponent) {
  return (
    <div className='w-fit bg-blue px-2 py-1 text-center'>
      <p className='text-xs font-bold text-white'>{label}</p>
    </div>
  )
}

export default SideNewsLabel

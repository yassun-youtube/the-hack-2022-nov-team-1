type SideNewsLabelComponent = {
  label: string
}
const SideNewsLabel = ({label}: SideNewsLabelComponent) => {
  return (
    <div className={'w-20 bg-blue p-1 text-center'}>
      <p className={'text-xs text-white'}>{label}</p>
    </div>
  )
}

export default SideNewsLabel
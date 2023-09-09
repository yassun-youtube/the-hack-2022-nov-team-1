type ListTextComponent = {
  children?: React.ReactNode
}

function ListTextComponent({ children }: ListTextComponent) {
  return (
    <p className='mb-4 line-clamp-2 w-[226px] font-sans text-[15px] font-semibold leading-[25px] tracking-[-0.02em]'>
      {children}
    </p>
  )
}

export default ListTextComponent

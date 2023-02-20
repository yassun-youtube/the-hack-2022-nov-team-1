type ListTextComponent = {
  children?: React.ReactNode
}

const ListTextComponent = ({ children }: ListTextComponent) => {
  return (
    <p className='mb-4 w-[226px] font-sans text-[15px] font-semibold leading-[25px] tracking-[-0.02em] line-clamp-2'>
      {children}
    </p>
  )
}

export default ListTextComponent

import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'
import HeaderNavContainer from '@components/molecules/HeaderNavContainer'
import { HEADER_NAV } from 'constant/constant'

const HeaderSection = () => {
  return (
    <header className='mx-10 h-[134px] pt-7 pb-5'>
      <div className='mb-7 flex items-center'>
        <h2 className='mr-2 bg-red text-2xl font-bold text-white'>steadfast</h2>
        <h2 className='text-2xl font-bold'>news</h2>
      </div>
      <div className='flex items-center justify-between font-sans font-semibold text-black'>
        <ul className='flex space-x-5'>
          {HEADER_NAV.map((item) => (
            <HeaderNavContainer
              key={item.text}
              {...item}
            />
          ))}
        </ul>
        <div className='flex items-center'>
          <span className='mr-5 text-sm'>Listen</span>
          <MagnifyingGlassCircleIcon className='h-11 text-gray' />
        </div>
      </div>
    </header>
  )
}

export default HeaderSection

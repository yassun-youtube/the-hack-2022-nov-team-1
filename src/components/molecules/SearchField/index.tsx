'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'

const SearchField = () => {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      className='relative float-right flex items-center rounded-full border'
      ref={formRef}>
      <MagnifyingGlassIcon className='absolute float-right my-auto h-5 pl-2' />
      <input
        type='search'
        className='z-10 float-right h-9 w-9 cursor-pointer bg-gray/0 outline-none transition-all duration-200 ease-linear focus:w-full focus:cursor-text focus:pl-10 focus:pr-4 focus:ease-out'
        onBlur={() => formRef.current?.reset()}
      />
    </form>
  )
}

export default SearchField

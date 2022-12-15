'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef } from 'react'

const SearchField = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/search/${inputRef.current?.value}`)
  }
  return (
    <form
      className='relative float-right flex items-center rounded-full border'
      ref={formRef}
      onSubmit={(event) => submitHandler(event)}>
      <MagnifyingGlassIcon className='absolute float-right my-auto h-5 pl-2' />
      <input
        type='search'
        className='z-10 float-right h-9 w-9 cursor-pointer bg-gray/0 outline-none transition-all duration-200 ease-out focus:w-56 focus:cursor-text focus:pl-10 focus:pr-4 focus:ease-out'
        onBlur={() => formRef.current?.reset()}
        ref={inputRef}
      />
    </form>
  )
}

export default SearchField

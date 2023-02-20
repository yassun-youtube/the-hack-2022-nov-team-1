'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'
import { useRef } from 'react'
import { useScrollStore } from '@store/store'

const SearchField = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const { setScrollAmount } = useScrollStore()

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (location.href.includes('/news/')) {
      setScrollAmount && setScrollAmount(0)
    }
    let uri = ''
    if (inputRef.current) {
      uri = inputRef.current.value
    }
    router.push(`/search?q=${encodeURI(uri)}`)
  }
  return (
    <form
      id='searchForm'
      className='relative float-right flex items-center rounded-full border'
      ref={formRef}
      onSubmit={(event) => submitHandler(event)}>
      <MagnifyingGlassIcon className='absolute float-right my-auto h-5 pl-2' />
      <input
        placeholder='searchInput'
        type='search'
        className='z-10 float-right h-9 w-9 cursor-pointer bg-gray/0 outline-none transition-all duration-200 ease-out placeholder:text-transparent focus:w-56 focus:cursor-text focus:pl-10 focus:pr-4 focus:ease-out'
        onBlur={() => formRef.current?.reset()}
        ref={inputRef}
      />
    </form>
  )
}

export default SearchField

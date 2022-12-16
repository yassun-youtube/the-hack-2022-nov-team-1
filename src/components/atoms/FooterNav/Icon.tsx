import Link from 'next/link'
import { ReactNode } from 'react'

type Icon = {
  link: string
  children: ReactNode
}

const Icon = ({ link, children }: Icon) => {
  return (
    <Link
      href={link}
      className='mt-3 block'>
      {children}
    </Link>
  )
}

export default Icon

import Link from 'next/link'

type Icon = {
  link: string
  children: React.ReactNode
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

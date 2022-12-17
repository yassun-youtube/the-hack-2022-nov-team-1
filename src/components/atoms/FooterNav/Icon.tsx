import Link from 'next/link'

type Icon = {
  link: string
  label: string
  children: React.ReactNode
}

const Icon = ({ link, label, children }: Icon) => {
  return (
    <Link
      href={link}
      className='mt-3 block'
      aria-label={label}>
      {children}
    </Link>
  )
}

export default Icon

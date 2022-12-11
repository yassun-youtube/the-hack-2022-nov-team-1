import Link from 'next/link'
import ListTextComponent from '@components/atoms/ListText'

type ListItemContainer = {
  title: string
  url: string
}

const ListItemContainer = ({ title, url }: ListItemContainer) => {
  return (
    <Link href={url}>
      <ListTextComponent>{title}</ListTextComponent>
      <hr className={'mb-4'} />
    </Link>
  )
}

export default ListItemContainer

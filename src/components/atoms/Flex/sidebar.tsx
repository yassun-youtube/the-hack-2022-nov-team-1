type SidebarProps = {
  tweetItems: string[]
}

export const Sidebar = ({ tweetItems }: SidebarProps) => {
  return (
    <div className='w-1/5 pl-8 text-xs text-black'>
      {tweetItems.map((tweetItem) => {
        return (
          <div
            key={tweetItem}
            className={'mb-8'}>
            <p>{tweetItem}</p>
          </div>
        )
      })}
    </div>
  )
}

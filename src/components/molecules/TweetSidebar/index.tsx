import { use } from 'react'
import { getTweetsCached, preloadTweets } from '@libs/tweetUtil'

const cache = new Map()

function fetchData(url: string) {
  if (!cache.has(url)) {
    cache.set(url, getData(url))
  }
  return cache.get(url)
}

async function getData(url: string) {
  if (url) {
    preloadTweets(url)
    return await getTweetsCached(url)
  } else {
    throw Error('Not implemented')
  }
}

const TweetSidebar = ({ url }: { url: string }) => {
  const tweetItems: string[] = use(fetchData(url))
  return (
    <div className='w-1/5 pl-8 text-xs text-black'>
      {tweetItems.map((tweetItem) => {
        return (
          <div
            key={tweetItem}
            className='mb-8'>
            <p>{tweetItem}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TweetSidebar

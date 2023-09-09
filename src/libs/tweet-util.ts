import { cache } from 'react'

import { twApiBaseUrl, URL_REGEX } from '@/constant/constant'

import type { tweetItem } from '@/types/tweet-item'
import 'server-only'

export const preloadTweets = (url: string) => {
  void getTweetsCached(url)
}
export const getTweetsCached = cache(async (url: string) => {
  const res = await fetch(
    `${twApiBaseUrl}/recent?query=url:"${url}" -is:retweet`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TW_API_KEY}`,
      },
      next: { revalidate: 60 },
    },
  )
  if (!res.ok) return []
  const tweetResult = await res.json()
  if (!tweetResult.meta || tweetResult.meta.result_count === 0) return []
  const tweetTextArray: string[] = tweetResult.data.map((tweet: tweetItem) =>
    tweet.text.replaceAll(URL_REGEX, '').trim(),
  )

  const set = new Set(tweetTextArray)
  return [...set]
})

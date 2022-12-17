import { twApiBaseUrl } from '../constant/constant'
import { tweetItem } from 'types/tweetItem'

export const getTweets = async (url: string) => {
  const res = await fetch(`${twApiBaseUrl}/recent?query=url:"${url}" -is:retweet`, {
    headers: {
      Authorization: `Bearer ${process.env.TW_API_KEY}`,
    },
    next: { revalidate: 60 },
  })
  if (!res.ok) return []
  const tweetResult = await res.json()
  const Rexp = /((http|https|ftp):\/\/[\w?=&./-;#~%-]+(?![\w\s?&./;#~%"=-]*>))/g
  if (tweetResult.meta.result_count === 0) return []
  const tweetTextArray: string[] = tweetResult.data.map((tweet: tweetItem) =>
    tweet.text.replaceAll(Rexp, '').trim(),
  )

  const set = new Set(tweetTextArray)
  return [...set]
}

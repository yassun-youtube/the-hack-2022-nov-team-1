import { twApiBaseUrl } from '../constant/constant'
import { tweetItem } from 'types/tweetItem'

export const getTweets = async (url: string) => {
  const res = await fetch(`${twApiBaseUrl}/recent?query=url:"${url}" -is:retweet`, {
    headers: {
      Authorization: `Bearer ${process.env.TW_API_KEY}`,
    },
    next: { revalidate: 60 },
  })
  if (!res.ok) throw new Error('Failed to fetch data')
  const tweetData = (await res.json()).data
  const Rexp = /((http|https|ftp):\/\/[\w?=&./-;#~%-]+(?![\w\s?&./;#~%"=-]*>))/g
  const tweetTextArray: string[] = tweetData.map((tweet: tweetItem) =>
    tweet.text.replaceAll(Rexp, '').trim(),
  )

  const set = new Set(tweetTextArray)
  return [...set]
}

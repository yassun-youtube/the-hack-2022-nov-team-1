import { cache } from 'react'
import { cmsBaseUrl, cmsHeader as headers } from 'constant/constant'
import 'server-only'

export const getLatestNewsCachedPreload = () => {
  void getLatestNewsCached()
}
export const getLatestNewsCached = cache(async () => {
  const res = await fetch(cmsBaseUrl, { headers, next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Failed to fetch data')
  return (await res.json()).contents
})

export const getSpecificNewsPreload = (id: string) => {
  void getSpecificNewsCached(id)
}
export const getSpecificNewsCached = cache(async (id: string) => {
  const res = await fetch(`${cmsBaseUrl}/${id}`, {
    headers,
  })
  if (!res.ok) throw new Error('Failed to fetch data')
  return await res.json()
})

export const getLatestNewsIds = async () => {
  const res = await fetch(`${cmsBaseUrl}?limit=50&fields=id`, { headers })
  if (!res.ok) throw new Error('Failed to fetch data')
  return (await res.json()).contents
}

export const getQueryNewsIdsPreload = (keyword: string) => {
  void getQueryNewsIdsCached(keyword)
}
export const getQueryNewsIdsCached = cache(async (keyword: string) => {
  const res = await fetch(`${cmsBaseUrl}/?q=${encodeURI(keyword)}&fields=id`, {
    headers,
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('Failed to fetch data')
  return (await res.json()).contents
})

export const getFilteredNews = async (categoryName: string) => {
  let categoryId: string
  switch (categoryName) {
    case 'business':
      categoryId = 'm9bvtag2xxf'
      break
    case 'politics':
      categoryId = 'zlw1mj8_9ch5'
      break
    case 'technology':
      categoryId = '2jmxkcguh'
      break
    case 'science':
      categoryId = 'r_hyy5o7symh'
      break
    default:
      categoryId = ''
  }
  const res = await fetch(`${cmsBaseUrl}/?filters=category[equals]${categoryId}`, {
    headers,
  })
  if (!res.ok) throw new Error('Failed to fetch data')
  return (await res.json()).contents
}

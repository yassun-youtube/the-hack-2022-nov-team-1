import { cmsBaseUrl, cmsHeader as headers } from '../constant/constant'

export const getLatestNews = async () => {
  const res = await fetch(cmsBaseUrl, { headers })
  if (!res.ok) throw new Error('Failed to fetch data')
  return (await res.json()).contents
}

export const getSpecificNews = async (id: string) => {
  const res = await fetch(`${cmsBaseUrl}/${id}`, {
    headers,
  })
  if (!res.ok) throw new Error('Failed to fetch data')
  return await res.json()
}

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

export const getQueryNews = async (keyword: string) => {
  const res = await fetch(`${cmsBaseUrl}/?q=${keyword}`, {
    headers,
  })
  if (!res.ok) throw new Error('Failed to fetch data')
  return (await res.json()).contents
}

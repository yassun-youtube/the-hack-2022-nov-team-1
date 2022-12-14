export const getLatestNews = async () => {
  const res = await fetch(`https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/news`, {
    headers: {
      'Content-Type': 'application/json',
      'X-MICROCMS-API-KEY': `${process.env.X_MICROCMS_API_KEY}`,
    },
  })
  if (!res.ok) throw new Error('Failed to fetch data')

  const rawData = await res.json()
  return rawData.contents
}

export const getSpecificNews = async (id: string) => {
  const res = await fetch(`https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/news/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-MICROCMS-API-KEY': `${process.env.X_MICROCMS_API_KEY}`,
    },
  })

  if (!res.ok) throw new Error('Failed to fetch data')

  const data = await res.json()
  return data
}
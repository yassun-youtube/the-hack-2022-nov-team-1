'use client'

import { useSearchParams } from 'next/navigation'

const QueryParamText = () => {
  const searchParam = useSearchParams().get('q')

  return <>{typeof searchParam === 'string' ? decodeURIComponent(searchParam) : ''}</>
}

export default QueryParamText

'use client'

import { useSearchParams } from 'next/navigation'

function QueryParameterText() {
  const searchParameter = useSearchParams().get('q')

  return (
    <>
      {typeof searchParameter === 'string'
        ? decodeURIComponent(searchParameter)
        : ''}
    </>
  )
}

export default QueryParameterText

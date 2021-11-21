import { useRouter as useNextRouter } from 'next/router'
import { useMemo } from 'react'

// next-router doesn't provide query at the initial rendering
export function useRouter<T extends string>() {
  type Query = Record<Extract<T, string>, string>

  const router = useNextRouter()
  const query = useMemo<Query>(() => {
    const browserQuery = {}
    const urlParams = new URLSearchParams(location.search)

    const realPaths = location.pathname.split('/')
    const nextPaths = router.pathname.split('/')

    nextPaths.reduce((acc: { [key: string]: string }, current, index) => {
      const pathParam = current.match(/\[(.+?)\]/)

      if (pathParam) {
        acc[pathParam[1]] = realPaths[index]
      }
      return acc
    }, browserQuery)

    return {
      ...browserQuery,
      ...Object.fromEntries(urlParams.entries()),
    } as Query
  }, [router])

  return { ...router, query } as const
}

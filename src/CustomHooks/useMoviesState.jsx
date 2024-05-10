import { useEffect, useState } from 'react'

export function useMoviesState(query) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const KEY = '13f0e909'

  useEffect(
    function () {
      const controller = new AbortController()

      async function fetchMovies() {
        try {
          setIsLoading(true)
          setError('')
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          )

          if (!res.ok) throw new Error('This Page is Loading')

          const data = await res.json()

          if (data.Response === 'False') throw new Error('Movie Not Found')

          setMovies(data.Search)
          // console.log(data.Search)
          setError('')
        } catch (err) {
          if (err.message === 'AbortError') {
            // console.log(err.message)
            setError(err.message)
          }
        } finally {
          setIsLoading(false)
        }
      }

      if (!query.length) {
        setMovies([])
        setError('')
      }

      fetchMovies()

      return function () {
        controller.abort()
      }
    },
    [query]
  )

  return { movies, isLoading, error }
}

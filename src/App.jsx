import { useEffect, useState } from 'react'
import './App.css'
import Box from './components/Box'
import Header from './components/common/Header'
import Main from './components/Main'
import MovieList from './components/MovieList'
import WatchList from './components/WatchList'
import LoadingMessage from './components/LoadingMessage'
import ErrorMessage from './components/ErrorMessage'

const KEY = '13f0e909'

function App() {
  const [query, setQuery] = useState('back to the future')
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true)
          setError('')
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          )

          if (!res.ok) throw new Error('This Page is Loading')

          const data = await res.json()

          if (data.Response === 'False') throw new Error('Movie Not Found')

          setMovies(data.Search)
        } catch (err) {
          console.log(err.message)
          setError(err.message)
        } finally {
          setIsLoading(false)
        }
      }

      fetchMovies()
    },
    [query]
  )

  return (
    <>
      <Header query={query} setQuery={setQuery} movies={movies} />

      <Main>
        <Box width="60%">
          {isLoading && <LoadingMessage />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage />}
        </Box>
        <Box width="30%">
          <WatchList />
        </Box>
      </Main>
    </>
  )
}

export default App

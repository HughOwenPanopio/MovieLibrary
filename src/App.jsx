import { useEffect, useState } from 'react'
import './App.css'
import Box from './components/Box'
import Header from './components/common/Header'
import Main from './components/Main'
import MovieList from './components/MovieList'
import WatchList from './components/WatchList'
import LoadingMessage from './components/LoadingMessage'
import ErrorMessage from './components/ErrorMessage'
import WatchedSummary from './components/WatchedSummary'
import MovieDetails from './components/MovieDetails'
import { useMediaQuery } from '@mui/material'

const KEY = '13f0e909'

function App() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedID, setSelectedID] = useState(null)

  const [watched, setWatched] = useState(function () {
    const storedMovies = localStorage.getItem('watched')
    return JSON.parse(storedMovies) || []
  })

  const isDesktop = useMediaQuery('(max-width: 1023px)')

  function handleSelectedMovie(id) {
    setSelectedID((selectedID) => (id === selectedID ? null : id))
  }

  function handleAddMovie(movie) {
    setWatched((watched) => [...watched, movie])
    setSelectedID(null)
  }

  function handleCloseMovie() {
    setSelectedID(null)
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id))
  }

  useEffect(
    function () {
      localStorage.setItem('watched', JSON.stringify(watched))
    },
    [watched]
  )

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

  return (
    <>
      <Header query={query} setQuery={setQuery} movies={movies} />

      <Main>
        {query && (
          <Box width={isDesktop ? '80%' : '60%'}>
            {isLoading && <LoadingMessage />}
            {!isLoading && !error && (
              <MovieList
                movies={movies}
                onSelectedMovie={handleSelectedMovie}
              />
            )}
            {error && <ErrorMessage />}
          </Box>
        )}
        <Box width={isDesktop ? '80%' : '35%'}>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onAddMovie={handleAddMovie}
              onCloseMovie={handleCloseMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  )
}

export default App

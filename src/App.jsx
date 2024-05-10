import { useState } from 'react'
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
import { useMoviesState } from './CustomHooks/useMoviesState'
import { useLocalStorageState } from './CustomHooks/useLocalStorageState'

function App() {
  const [query, setQuery] = useState('')
  const [selectedID, setSelectedID] = useState(null)
  const [watched, setWatched] = useLocalStorageState([])

  const isDesktop = useMediaQuery('(max-width: 1023px)')

  const { movies, isLoading, error } = useMoviesState(query)

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

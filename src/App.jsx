import { useEffect, useState } from 'react'
import './App.css'
import Box from './components/Box'
import Header from './components/common/Header'
import Main from './components/Main'
import MovieList from './components/MovieList'
import WatchList from './components/WatchList'

const KEY = '13f0e909'

function App() {
  const [query, setQuery] = useState('back to the future')
  const [movies, setMovies] = useState([])

  useEffect(
    function () {
      async function fetchMovies() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        )
        const data = await res.json()
        setMovies(data.Search)
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
          <MovieList movies={movies} />
        </Box>
        <Box width="30%">
          <WatchList />
        </Box>
      </Main>
    </>
  )
}

export default App

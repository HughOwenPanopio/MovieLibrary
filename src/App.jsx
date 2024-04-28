import './App.css'
import Box from './components/Box'
import Header from './components/common/Header'
import MovieList from './components/MovieList'
import WatchList from './components/WatchList'

function App() {
  return (
    <>
      <Header />

      <Box>
        <MovieList />
      </Box>
      <Box>
        <WatchList />
      </Box>
    </>
  )
}

export default App

import './App.css'
import Box from './components/Box'
import Header from './components/common/Header'
import MovieList from './components/MovieList'

function App() {
  return (
    <>
      <Header />

      <Box>
        <MovieList />
      </Box>
    </>
  )
}

export default App

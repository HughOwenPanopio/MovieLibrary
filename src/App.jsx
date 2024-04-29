import './App.css'
import Box from './components/Box'
import Header from './components/common/Header'
import Main from './components/Main'
import MovieList from './components/MovieList'
import WatchList from './components/WatchList'

function App() {
  return (
    <>
      <Header />

      <Main>
        <Box width="60%">
          <MovieList />
        </Box>
        <Box width="30%">
          <WatchList />
        </Box>
      </Main>
    </>
  )
}

export default App

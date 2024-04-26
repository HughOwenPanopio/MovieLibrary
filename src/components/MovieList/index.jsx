import TemporaryMovies from '../../temporarydata/TemporaryMovies.json'
import MoviesCard from '../MoviesCard'

function MovieList() {
  return (
    <>
      {TemporaryMovies.map((movies) => (
        <MoviesCard movies={movies} key={movies.imdbID} />
      ))}
    </>
  )
}

export default MovieList

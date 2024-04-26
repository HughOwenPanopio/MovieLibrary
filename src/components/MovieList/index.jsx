import TemporaryMovies from '../../temporarydata/TemporaryMovies.json'
import MoviesCard from '../MoviesCard'
import './style.css'

function MovieList() {
  return (
    <>
      <div className="moviesContainer">
        {TemporaryMovies.map((movies) => (
          <MoviesCard movies={movies} key={movies.imdbID} />
        ))}
      </div>
    </>
  )
}

export default MovieList

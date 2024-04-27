import TemporaryMovies from '../../temporarydata/TemporaryMovies.json'
import MoviesCard from '../MoviesCard'
import './style.css'

function MovieList() {
  return (
    <>
      <div className="movieList-header">
        <h2>Movie List</h2>
      </div>
      <div className="moviesContainer">
        {TemporaryMovies.map((movies) => (
          <MoviesCard movies={movies} key={movies.imdbID} />
        ))}
      </div>
    </>
  )
}

export default MovieList

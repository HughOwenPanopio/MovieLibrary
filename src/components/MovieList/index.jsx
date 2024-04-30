// import TemporaryMovies from '../../temporarydata/TemporaryMovies.json'
import MoviesCard from '../MoviesCard'
import './style.css'
import PropTypes from 'prop-types'

function MovieList({ movies }) {
  return (
    <>
      <div className="movieList-header">
        <h2>Movie List</h2>
      </div>
      <div className="moviesContainer">
        {movies.map((movie) => (
          <MoviesCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array,
}

export default MovieList

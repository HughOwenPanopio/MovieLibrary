import PropTypes from 'prop-types'
import './style.css'

function MoviesCard({ movie, onSelectedMovie }) {
  return (
    <>
      <div
        className="movieCard-container"
        onClick={() => onSelectedMovie(movie.imdbID)}
      >
        <div className="imgContainer">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="card-content">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </div>
    </>
  )
}

MoviesCard.propTypes = {
  movie: PropTypes.object,
  onSelectedMovie: PropTypes.func,
}

export default MoviesCard

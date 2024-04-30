import PropTypes from 'prop-types'
import './style.css'

function MoviesCard({ movie }) {
  return (
    <>
      <div className="movieCard-container">
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
}

export default MoviesCard

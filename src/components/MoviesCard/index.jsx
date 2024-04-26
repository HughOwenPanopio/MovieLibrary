import PropTypes from 'prop-types'
import './style.css'

function MoviesCard({ movies }) {
  return (
    <>
      <div>
        <div className="imgContainer">
          <img src={movies.poster} alt={movies.title} />
        </div>
        <div className="card-content">
          <h3>{movies.title}</h3>
          <p>{movies.year}</p>
        </div>
      </div>
    </>
  )
}

MoviesCard.propTypes = {
  movies: PropTypes.object,
}

export default MoviesCard

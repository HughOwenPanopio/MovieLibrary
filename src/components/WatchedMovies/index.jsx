import './style.css'
import PropTypes from 'prop-types'

function WatchedMovies({ watched }) {
  return (
    <>
      <div>
        <div>
          <img src={watched.poster} alt={watched.title} />
        </div>
        <div>
          <h3>{watched.title}</h3>
          <p>{watched.year}</p>
          <p>
            <span>{watched.runtime} minutes</span>
            <span> {watched.imdbRating}⭐</span>
          </p>
        </div>
      </div>
    </>
  )
}

WatchedMovies.propTypes = {
  watched: PropTypes.object,
}

export default WatchedMovies

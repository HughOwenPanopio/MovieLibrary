import './style.css'
import PropTypes from 'prop-types'

function WatchedMovies({ watched }) {
  return (
    <>
      <li className="list-movie">
        <div className="list-movie-img">
          <img src={watched.poster} alt={watched.title} />
        </div>

        <div className="details-container">
          <div>
            <h3>{watched.title}</h3>
            <p>{watched.year}</p>
          </div>
          <div className="details">
            <p>
              <span>{watched.runtime} </span>
              <span>minutes</span>
            </p>
            <p>
              <span>{watched.imdbRating}</span>
              <span>⭐</span>
            </p>
          </div>
        </div>
      </li>
    </>
  )
}

WatchedMovies.propTypes = {
  watched: PropTypes.object,
}

export default WatchedMovies

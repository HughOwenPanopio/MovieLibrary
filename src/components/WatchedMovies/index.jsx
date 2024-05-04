import './style.css'
import PropTypes from 'prop-types'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'

function WatchedMovies({ movie }) {
  return (
    <>
      <li className="list-movie">
        <div className="list-movie-img">
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div>
          <div>
            <h3>{movie.title}</h3>
          </div>
          <div className="details">
            <p>
              <span>
                <StarBorderPurple500Icon
                  sx={{ fontSize: 'medium', color: '#FFC700' }}
                />
              </span>{' '}
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>
                <StarBorderPurple500Icon
                  sx={{ fontSize: 'medium', color: '#FFC700' }}
                />
              </span>{' '}
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>Run Time: </span> <span>{movie.runtime} minutes</span>
            </p>
          </div>
        </div>
      </li>
    </>
  )
}

WatchedMovies.propTypes = {
  movie: PropTypes.object,
}

export default WatchedMovies

import './style.css'
import PropTypes from 'prop-types'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'

function WatchedMovies({ watched }) {
  return (
    <>
      <li className="list-movie">
        <div className="list-movie-img">
          <img src={watched.poster} alt={watched.title} />
        </div>
        <div>
          <div>
            <h3>{watched.title}</h3>
          </div>
          <div className="details">
            <p>
              <span>
                <StarBorderPurple500Icon
                  sx={{ fontSize: 'medium', color: '#FFC700' }}
                />
              </span>{' '}
              <span>{watched.imdbRating}</span>
            </p>
            <p>
              <span>
                <StarBorderPurple500Icon
                  sx={{ fontSize: 'medium', color: '#FFC700' }}
                />
              </span>{' '}
              <span>{watched.userRating}</span>
            </p>
            <p>
              <span>Run Time: </span> <span>{watched.runtime}</span>{' '}
              <span>min</span>
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

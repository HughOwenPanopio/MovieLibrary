import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import PropTypes from 'prop-types'
import './style.css'

function WatchedSummary({ watched }) {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0)

  const averageImdbRating = average(watched.map((movie) => movie.imdbRating))
  const averageUserRating = average(watched.map((movie) => movie.userRating))
  const averageRunTime = average(watched.map((movie) => movie.runtime))

  return (
    <>
      <div className="summary-container">
        <h2>Watch List Summary</h2>
        <div className="summary-details">
          <p>
            <span>
              <LocalMoviesIcon sx={{ fontSize: 'medium', color: '#FFC700' }} />
            </span>
            <span>{watched.length} Movies</span>
          </p>
          <p>
            <span>IMDB: </span>
            <span>
              <StarBorderPurple500Icon
                sx={{ fontSize: 'medium', color: '#FFC700' }}
              />
            </span>
            <span> {averageImdbRating.toFixed(1)}</span>
          </p>
          <p>
            <span>User: </span>
            <span>
              <StarBorderPurple500Icon
                sx={{ fontSize: 'medium', color: '#FFC700' }}
              />
            </span>
            <span> {averageUserRating.toFixed(1)}</span>
          </p>
          <p>
            <span>
              <AccessTimeFilledIcon
                sx={{ fontSize: 'medium', color: '#FFC700' }}
              />
            </span>
            <span>{averageRunTime.toFixed(1)} minutes</span>
          </p>
        </div>
      </div>
    </>
  )
}

WatchedSummary.propTypes = {
  watched: PropTypes.array,
}

export default WatchedSummary

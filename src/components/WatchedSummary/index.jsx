import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import PropTypes from 'prop-types'
import './style.css'
import { useMediaQuery } from '@mui/material'

function WatchedSummary({ watched }) {
  const isDesktop = useMediaQuery('(max-width: 1440px)')

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
            <span>
              {watched.length} {isDesktop || 'Movies'}
            </span>
          </p>
          <p>
            <span>{isDesktop || 'IMDB:'} </span>
            <span>
              <StarBorderPurple500Icon
                sx={{ fontSize: 'medium', color: '#FFC700' }}
              />
            </span>
            <span> {averageImdbRating.toFixed(1)}</span>
          </p>
          <p>
            <span>{isDesktop || 'User:'} </span>
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
            <span>
              {averageRunTime.toFixed(1)} {isDesktop || 'minutes'}
            </span>
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

import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import PropTypes from 'prop-types'
import './style.css'

function WatchedSummary({ watched }) {
  return (
    <>
      <div className="summary-container">
        <h2>Watch List Summary</h2>
        <div className="summary-details">
          <p>
            <span>
              <LocalMoviesIcon sx={{ fontSize: 'medium', color: '#FFC700' }} />
            </span>
            <span>Movies</span>
          </p>
          <p>
            <span>
              <StarBorderPurple500Icon
                sx={{ fontSize: 'medium', color: '#FFC700' }}
              />
            </span>
            <span>10</span>
          </p>
          <p>
            <span>
              <StarBorderPurple500Icon
                sx={{ fontSize: 'medium', color: '#FFC700' }}
              />
            </span>
            <span>10</span>
          </p>
          <p>
            <span>
              <AccessTimeFilledIcon
                sx={{ fontSize: 'medium', color: '#FFC700' }}
              />
            </span>
            <span>x minutes</span>
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

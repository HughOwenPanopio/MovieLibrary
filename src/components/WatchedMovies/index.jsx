import './style.css'
import PropTypes from 'prop-types'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useMediaQuery } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
// import RemoveIcon from '@mui/icons-material/Remove';

function WatchedMovies({ movie, onDeleteWatched }) {
  const isDesktop = useMediaQuery('(max-width: 1024px)')
  const isMobile = useMediaQuery('(max-width: 450px)')

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
              <span>{isMobile || 'IMDB:'} </span>
              <span>
                <StarBorderPurple500Icon
                  sx={{ fontSize: 'medium', color: '#FFC700' }}
                />
              </span>{' '}
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>{isMobile || 'User:'} </span>
              <span>
                <StarBorderPurple500Icon
                  sx={{ fontSize: 'medium', color: '#FFC700' }}
                />
              </span>{' '}
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>
                {isDesktop ? (
                  <AccessTimeIcon
                    sx={{ fontSize: 'medium', color: '#FFC700' }}
                  />
                ) : (
                  'Run Time:'
                )}
              </span>{' '}
              <span>
                {movie.runtime} {isMobile ? 'min' : 'minutes'}
              </span>
            </p>
            <button className="btn-delete">
              <span>
                <DeleteOutlineIcon
                  onClick={() => onDeleteWatched(movie.imdbID)}
                />
              </span>
            </button>
          </div>
        </div>
      </li>
    </>
  )
}

WatchedMovies.propTypes = {
  movie: PropTypes.object,
  onDeleteWatched: PropTypes.func,
}

export default WatchedMovies

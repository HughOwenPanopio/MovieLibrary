// import TemporaryWatched from '../../temporarydata/TemporaryWatched.json'
import WatchedMovies from '../WatchedMovies'
import PropTypes from 'prop-types'
import './style.css'

function WatchList({ watched, onDeleteWatched }) {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovies
            movie={movie}
            key={movie.imdbID}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
      </ul>
    </>
  )
}

WatchList.propTypes = {
  watched: PropTypes.array,
  onDeleteWatched: PropTypes.func,
}

export default WatchList

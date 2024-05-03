// import TemporaryWatched from '../../temporarydata/TemporaryWatched.json'
import WatchedMovies from '../WatchedMovies'
import PropTypes from 'prop-types'
import './style.css'

function WatchList({ watched }) {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovies movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </>
  )
}

WatchList.propTypes = {
  watched: PropTypes.array,
}

export default WatchList

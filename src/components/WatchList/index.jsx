import TemporaryWatched from '../../temporarydata/TemporaryWatched.json'
import WatchedMovies from '../WatchedMovies'
import './style.css'

function WatchList() {
  return (
    <>
      <ul className="list">
        {TemporaryWatched.map((watched) => (
          <WatchedMovies watched={watched} key={watched.imdbID} />
        ))}
      </ul>
    </>
  )
}

export default WatchList

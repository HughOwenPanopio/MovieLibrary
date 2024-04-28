import TemporaryWatched from '../../temporarydata/TemporaryWatched.json'
import WatchedMovies from '../WatchedMovies'

function WatchList() {
  return (
    <>
      <div>
        {TemporaryWatched.map((watched) => (
          <WatchedMovies watched={watched} key={watched.imdbID} />
        ))}
      </div>
    </>
  )
}

export default WatchList

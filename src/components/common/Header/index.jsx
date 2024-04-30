import './style.css'
import PropTypes from 'prop-types'

function Header({ query, setQuery, movies }) {
  return (
    <>
      <header>
        <div className="header">
          <h1>MovieLibrary</h1>
          <input
            type="text"
            placeholder="Search movie here..."
            className="searchBar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <p>{movies.length} movies found</p>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
  movies: PropTypes.array,
}

export default Header

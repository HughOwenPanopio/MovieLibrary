import './style.css'
import PropTypes from 'prop-types'

function Header({ query, setQuery }) {
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
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
}

export default Header

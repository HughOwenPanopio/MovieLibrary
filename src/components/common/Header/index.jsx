import './style.css'

function Header() {
  return (
    <>
      <header>
        <div className="header">
          <h1>MovieLibrary</h1>
          <input
            type="text"
            placeholder="Search movie here..."
            className="searchBar"
          />
          <p>X movies found</p>
        </div>
      </header>
    </>
  )
}

export default Header

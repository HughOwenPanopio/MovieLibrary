import { useRef } from 'react'
import './style.css'
import PropTypes from 'prop-types'
// import { useEffect } from 'react'
import { useKeyState } from '../../../CustomHooks/useKeyState'

function Header({ query, setQuery }) {
  const inputEL = useRef(null)

  useKeyState('Enter', function () {
    if (document.activeElement === inputEL.current) return
    inputEL.current.focus()
    setQuery('')
  })

  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (document.activeElement === inputEL.current) return

  //       if (e.code === 'Enter') {
  //         inputEL.current.focus()
  //         setQuery('')
  //       }
  //     }

  //     document.addEventListener('keydown', callback)
  //     return document.addEventListener('keydown', callback)
  //   },
  //   [setQuery]
  // )

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
            ref={inputEL}
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

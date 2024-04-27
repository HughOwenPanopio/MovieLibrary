import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.css'

function Box({ children }) {
  const [toggleItems, setToggleItems] = useState(true)

  return (
    <>
      <div className="box-container">
        <div className="btn-toggle-container">
          <button
            onClick={() => setToggleItems((open) => !open)}
            className="btn-toggle"
          >
            {toggleItems ? '-' : '+'}
          </button>
        </div>

        {toggleItems && [children]}
      </div>
    </>
  )
}

Box.propTypes = {
  children: PropTypes.node,
}

export default Box

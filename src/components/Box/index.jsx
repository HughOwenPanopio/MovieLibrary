import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.css'

function Box({ children, width }) {
  const [toggleItems, setToggleItems] = useState(true)

  return (
    <>
      <div className="box-container" style={{ width: width }}>
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
  width: PropTypes.string,
}

export default Box

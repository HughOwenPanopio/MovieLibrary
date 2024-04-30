import PropTypes from 'prop-types'
import { useState } from 'react'
import ToggleOffIcon from '@mui/icons-material/ToggleOff'
import ToggleOnIcon from '@mui/icons-material/ToggleOn'
import './style.css'

function Box({ children, width }) {
  const [toggleItems, setToggleItems] = useState(true)

  return (
    <>
      <div className="box-container" style={{ width: width }}>
        <div className="btn-toggle-container">
          {toggleItems ? (
            <ToggleOnIcon
              onClick={() => setToggleItems((open) => !open)}
              sx={{ fontSize: '50px', color: '#640d6b' }}
            />
          ) : (
            <ToggleOffIcon
              onClick={() => setToggleItems((open) => !open)}
              sx={{ fontSize: '50px', color: '#141e46' }}
            />
          )}
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

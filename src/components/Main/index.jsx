import PropTypes from 'prop-types'
import './style.css'

function Main({ children }) {
  return (
    <>
      <div className="Main-Container">{children}</div>
    </>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}

export default Main

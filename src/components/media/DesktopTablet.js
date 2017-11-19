import React from 'react'
import Responsive from 'react-responsive'

const DesktopTablet = ({ children }) => {
  return (<Responsive minWidth={ 768 } children={ children } />)
}

DesktopTablet.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
}

export default DesktopTablet

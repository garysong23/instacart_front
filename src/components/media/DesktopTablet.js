import React from 'react'
import Responsive from 'react-responsive'

const DesktopTablet = ({ children }) => {
  return (<Responsive minWidth={ 768 } children={ children } />)
}

DesktopTablet.propTypes = {
}

export default DesktopTablet

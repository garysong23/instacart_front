import React from 'react'
import Responsive from 'react-responsive'

const Desktop = ({ children }) => {
  return (<Responsive minWidth={ 992 } children={ children } />)
}

Desktop.propTypes = {
}

export default Desktop

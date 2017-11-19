import React from 'react'
import Responsive from 'react-responsive'

const Desktop = ({ children }) => {
  return (<Responsive minWidth={ 992 } children={ children } />)
}

Desktop.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
}

export default Desktop

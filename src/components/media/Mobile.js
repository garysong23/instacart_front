import React from 'react'
import Responsive from 'react-responsive'

const Mobile = ({ children }) => {
  return (<Responsive maxWidth={ 768 } children={ children } />)
}

Mobile.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
}

export default Mobile

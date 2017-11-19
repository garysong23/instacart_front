import React from 'react'
import Responsive from 'react-responsive'

const Mobile = ({ children }) => {
  return (<Responsive maxWidth={ 768 } children={ children } />)
}

Mobile.propTypes = {
}

export default Mobile

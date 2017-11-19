import React from 'react'
import Responsive from 'react-responsive'

const Tablet = ({ children }) => {
  return (
    <Responsive minWidth={ 768 } maxWidth={ 992 }
      children={ children } />
  )
}

Tablet.propTypes = {
}

export default Tablet

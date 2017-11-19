import React from 'react'
import Responsive from 'react-responsive'

const TabletMobile = ({ children }) => {
  return (
    <Responsive maxWidth={ 992 }
      children={ children } />
    )
}

TabletMobile.propTypes = {
}

export default TabletMobile

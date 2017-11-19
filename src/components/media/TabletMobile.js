import React from 'react'
import Responsive from 'react-responsive'

const TabletMobile = ({ children }) => {
  return (
    <Responsive maxWidth={ 992 }
      children={ children } />
    )
}

TabletMobile.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
}

export default TabletMobile

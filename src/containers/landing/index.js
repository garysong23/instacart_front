import React, { Component } from 'react'

import MastHead from './components/masthead'

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={ outerDivStyle }>
        <MastHead/>
      </div>
    )
  }
}

const outerDivStyle = {
  backgroundColor: 'khaki',
  height: '100vh',
  width: '100vw',
}


export default Landing

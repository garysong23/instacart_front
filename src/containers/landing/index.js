import React, { Component } from 'react'

import MastHead from './components/masthead'
import Background from '../../imgs/background.png'

class Landing extends Component {
  render() {
    return (
      <div style={ outerDivStyle }>
        <MastHead/>
      </div>
    )
  }
}

const outerDivStyle = {
  backgroundImage: `url('${ Background }')`,
  backgroundRepeat: 'repeat',
  height: '100vh',
  width: '100vw',
}

export default Landing

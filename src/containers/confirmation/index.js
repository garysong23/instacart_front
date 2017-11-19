import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class Landing extends Component {
  constructor(props) {
    super(props)
    console.log('tesst')
  }

  render() {
    return (
      <div style={ outerDivStyle }>
        <p>Hello world</p>
        <Button content='Hi'/>
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

import React, { Component } from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'

const HEADER_TEXT = 'All done!'
const SUBHEADER_TEXT_1 = 'Thank you for you application to Instacart.'
const SUBHEADER_TEXT_2 = 'We will contact you as soon as we find an opening.'

class Confirmation extends Component {
  constructor(props) {
    super(props)
    console.log('tesst')
  }

  render() {
    return (
      <div style={ divStyle }>
        <Segment padded='very' textAlign='center'
          className='m0 borderRadius0 background-lightgray shadow-inset'
          style={ segmentStyle }>
          <Header content={ HEADER_TEXT } style={ headerStyle }/>
          <Header content={ SUBHEADER_TEXT_1 } style={ subHeaderStyle }/>
          <Header content={ SUBHEADER_TEXT_2 } style={ subHeaderStyle }/>
        </Segment>
      </div>
    )
  }
}

const segmentStyle = {
  width: '70%',
  margin: 'auto',
}

const divStyle = {
  backgroundColor: 'khaki',
  height: '100vh',
  width: '100vw',
  padding: '3em',
}

const headerStyle = {
  fontWeight: 'normal',
  fontSize: '1.75em',
  marginBottom: '1em',
}

const subHeaderStyle = {
  fontWeight: 'normal',
  fontSize: '1.25em',
  marginBottom: '1em',
  marginTop: '0',
}

export default Confirmation

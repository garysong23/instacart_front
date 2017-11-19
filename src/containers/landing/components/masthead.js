import React from 'react'

import {
  Segment,
  Container,
  Header,
  Input,
} from 'semantic-ui-react'

const MASK_HEADER_TEXT = 'HELLO'
const MASK_SUBHEADER_TEXT = 'HELLO'

class MastHead extends React.Component {
  render() {
    return(
      <Segment inverted vertical
        style={ outerSegmentStyle }>
        <Container textAlign='center'
          style={ centerContainerStyle }>
          <Header inverted
            className='font2-5 mb1-25 mt0-5'
            content={ MASK_HEADER_TEXT }/>
          <Header inverted
            className='fw-normal font1-75 mt0 mb1-5'
            content={ MASK_SUBHEADER_TEXT }/>
          <Input action='Get Started'
            placeholder='hello@instacart.com'/>
        </Container>
      </Segment>
    )
  }
}

const outerSegmentStyle = {
  height: '100vh',
  minHeight: '700px',
  backgroundSize: 'cover',
}

const centerContainerStyle = {
  height: '300px',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  margin: 'auto',
}

export default MastHead

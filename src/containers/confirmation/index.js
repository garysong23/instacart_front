import React, { Component } from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'

import Background from '../../imgs/background.png'

import Mobile from '../../components/media/Mobile'
import DesktopTablet from '../../components/media/DesktopTablet'

const HEADER_TEXT = 'All done!'
const SUBHEADER_TEXT_1 = 'Thank you for applying to Instacart.'
const SUBHEADER_TEXT_2 = 'We will contact you as soon as we find an opening.'

class Confirmation extends Component {
  renderSegment = () => {
    return [
      <Header content={ HEADER_TEXT } style={ headerStyle }/>,
      <Header content={ SUBHEADER_TEXT_1 } style={ subHeaderStyle }/>,
      <Header content={ SUBHEADER_TEXT_2 } style={ subHeaderStyle }/>,
    ]
  }

  render() {
    return (
      <div>
        <DesktopTablet>
          <div style={ dtDivStyle }>
            <Segment padded='very' textAlign='center'
              style={ dtSegmentStyle }>
              { this.renderSegment() }
            </Segment>
          </div>
        </DesktopTablet>

        <Mobile>
          <div style={ mobileDivStyle }>
            <Segment padded='very' textAlign='center'
              style={ mobileSegmentStyle }>
              { this.renderSegment() }
            </Segment>
          </div>
        </Mobile>
      </div>
    )
  }
}

const dtSegmentStyle = {
  width: '70%',
  margin: 'auto',
}

const dtDivStyle = {
  backgroundImage: `url('${ Background }')`,
  backgroundRepeat: 'repeat',
  height: '100vh',
  width: '100vw',
  padding: '3em',
}

const mobileSegmentStyle = {
  margin: 'auto',
}

const mobileDivStyle = {
  backgroundImage: `url('${ Background }')`,
  backgroundRepeat: 'repeat',
  height: '100vh',
  width: '100vw',
  padding: '1.5em',
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

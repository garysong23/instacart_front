import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
  Segment,
} from 'semantic-ui-react'

import Mobile from '../../components/media/Mobile'
import DesktopTablet from '../../components/media/DesktopTablet'

import Background from '../../imgs/background.png'

import NameSegment from './components/name_segment'
import CarSegment from './components/car_segment'
import PhoneModelSegment from './components/phone_model_segment'
import RequirementsSegment from './components/requirements_segment'
import ZipCodeSegment from './components/zip_code_segment'
import PhoneNumberSegment from './components/phone_number_segment'

class Register extends Component {
  state = {
    segment: 'name'
  }

  renderSegment = () => {
    switch (this.state.segment) {
    case 'name':
      return (
        <NameSegment onSubmit={ () => this.onSubmit('name')}/>
      )
    case 'car':
      return (
        <CarSegment onSubmit={ () => this.onSubmit('car')}/>
      )
    case 'phone_model':
      return (
        <PhoneModelSegment onSubmit={ () => this.onSubmit('phone_model')}/>
      )
    case 'requirements':
      return (
        <RequirementsSegment onSubmit={ () => this.onSubmit('requirements')}/>
      )
    case 'zip':
      return (
        <ZipCodeSegment onSubmit={ () => this.onSubmit('zip')}/>
      )
    case 'phone_number':
      return (
        <PhoneNumberSegment onSubmit={ () => this.onSubmit('phone_number')}/>
      )
    default:
      return (
        <NameSegment onSubmit={ () => this.onSubmit('name')}/>
      )
    }
  }

  onSubmit = (stage) => {
    console.log(stage)
    switch (stage) {
    case 'name':
      this.setState({ segment: 'car'})
      break
    case 'car':
      this.setState({ segment: 'phone_model'})
      break
    case 'phone_model':
      this.setState({ segment: 'requirements'})
      break
    case 'requirements':
      this.setState({ segment: 'zip'})
      break
    case 'zip':
      this.setState({ segment: 'phone_number'})
      break
    case 'phone_number':
      this.props.history.push('confirmation')
      break
    default:
    }
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
            <Segment padded textAlign='center'
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

export default withRouter(Register)

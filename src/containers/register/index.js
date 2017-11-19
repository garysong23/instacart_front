import React, { Component } from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'

import NameSegment from './components/name_segment'
import CarSegment from './components/car_segment'
import PhoneModelSegment from './components/phone_model_segment'
import RequirementsSegment from './components/requirements_segment'
import ZipCodeSegment from './components/zip_code_segment'
import PhoneNumberSegment from './components/phone_number_segment'

class Register extends Component {
  constructor(props) {
    super(props)
    console.log('tesst')
    this.state = {
      segment: 'name'
    }
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
      console.log('final')
      break
    default:
    }
  }

  render() {
    return (
      <div style={ outerDivStyle }>
        <Segment padded='very' textAlign='center'
          className='m0 borderRadius0 background-lightgray shadow-inset'
          style={ outerSegmentStyle }>
          { this.renderSegment() }
        </Segment>
      </div>
    )
  }
}

const outerSegmentStyle = {
  height: '100vh',
  minHeight: '700px',
}

const outerDivStyle = {
  backgroundColor: 'khaki',
  height: '100vh',
  width: '100vw',
}


export default Register

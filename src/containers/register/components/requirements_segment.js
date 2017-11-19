import React from 'react'
import { Link } from 'react-router-dom'

import {
  Grid,
  Header,
  Form,
  Checkbox,
} from 'semantic-ui-react'

const HEADER_TEXT = 'Please verify the following'
const CHECKBOX_COPY = 'I meet all of the requirements above'
const REQUIREMENTS = [
  'Able to lift between 30-40 lbs with or without an accommodation',
  'Eligible to work in the United States',
  'Consent to a background check',
  'Be 18 or over',
]

class RequirementsSegment extends React.Component {
  state = {
    showError: false,
    errorMessage: null,
  }

  handleSubmit = () => {
  }

  handleChange = () => this.setState({ showError: false })

  generateConditions = () => {
    const conditions = []
    for (const requirement of REQUIREMENTS) {
      const contentStr = '•  ' + requirement
      conditions.push(
        <Header textAlign='left' content={ contentStr }
          style={ requirementStyle }/>
      )
    }
    return conditions
  }

  render() {
    return(
      <Grid padded>
        <Grid.Column textAlign='center'>
          <Form size='large' onSubmit={ this.props.onSubmit }>
            <Header content={ HEADER_TEXT } style={ headerStyle }/>
            { this.generateConditions() }
            <Checkbox label={ CHECKBOX_COPY } style={ checkStyle }/>
            <Form.Button color='blue' center size='large'
              style={ buttonStyle }>
              Next
            </Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

const headerStyle = {
  fontWeight: 'normal',
  fontSize: '1.5em',
  marginBottom: '1.5em',
  marginTop: '0',
}

const requirementStyle = {
  fontWeight: 'normal',
  fontSize: '1em',
  marginBottom: '1.5em',
  marginTop: '0',
}

const checkStyle = {
  fontWeight: 'normal',
  fontSize: '1em',
  textAlign: 'left',
}

const buttonStyle = {
  marginTop: '1.25em',
}

RequirementsSegment.propTypes = {
}

export default RequirementsSegment

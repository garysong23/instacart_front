import React from 'react'
import { Link } from 'react-router-dom'

import {
  Segment,
  Grid,
  Header,
  Form,
  Checkbox,
} from 'semantic-ui-react'

const HEADER_TEXT = 'Hi'
const REQUIREMENTS = [
  'Be 18 or over',
  'Be able to lift between 30-40 lbs with or without an accommodation',
  'Be eligible to work in the United States',
]

class RequirementsSegment extends React.Component {
  state = {
    showError: false,
    errorMessage: null,
  }

  handleSubmit = () => {
  }

  handleChange = () => this.setState({ showError: false })

  render() {
    return(
      <Segment padded>
        <Grid padded>
          <Grid.Column textAlign='center'>
            <Form size='large' onSubmit={ this.props.onSubmit }>
              <Header content={ HEADER_TEXT }/>
              <Checkbox label='I agree to everything' />
              <Form.Button color='blue' fluid size='large'>
                Next
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

RequirementsSegment.propTypes = {
}

export default RequirementsSegment

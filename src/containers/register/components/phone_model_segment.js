import React from 'react'
import { Link } from 'react-router-dom'

import {
  Segment,
  Grid,
  Header,
  Form,
  Popup,
  Item,
} from 'semantic-ui-react'

class PhoneModelSegment extends React.Component {
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
            <Form size='large'
              onSubmit={ this.props.onSubmit }>
              <Form.Button color='blue' fluid size='large'>
                Sign Up
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

PhoneModelSegment.propTypes = {
}

export default PhoneModelSegment

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

const HEADER_TEXT = 'How should we contact you?'

class PhoneNumberSegment extends React.Component {
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
            <Header
              className='fw-normal font1-75 mt0 mb1-5'
              content={ HEADER_TEXT }/>
            <Form size='large'
              onSubmit={ this.props.onSubmit }>
              <Form.Field>
                <Form.Input fluid name='password' icon='lock'
                  iconPosition='left' placeholder='First name'
                  error={ this.state.showError }/>
              </Form.Field>
              <Form.Button color='blue' center size='large'>
                Next
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

PhoneNumberSegment.propTypes = {
}

export default PhoneNumberSegment

import React from 'react'
import { Link } from 'react-router-dom'

import {
  Segment,
  Grid,
  Form,
  Header,
  Radio
} from 'semantic-ui-react'

const HEADER_TEXT = 'Hi'

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
            <Form size='large' onSubmit={ this.props.onSubmit }>
              <Header content={ HEADER_TEXT }/>
              <Form.Field>
                <Radio name='radio2'
                  label='Choose this' value='this'
                  checked={this.state.value === 'this'}
                  onChange={this.handleChange}/>
                <Radio name='radio2'
                  label='Or that' value='that'
                  checked={this.state.value === 'that'}
                  onChange={this.handleChange}/>
                <Radio name='radio2'
                  label='Or thattt' value='thattt'
                  checked={this.state.value === 'thattt'}
                  onChange={this.handleChange}/>
              </Form.Field>
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

PhoneModelSegment.propTypes = {
}

export default PhoneModelSegment

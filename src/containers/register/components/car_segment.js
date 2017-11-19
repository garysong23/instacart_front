import React from 'react'
import { Link } from 'react-router-dom'

import {
  Segment,
  Grid,
  Header,
  Form,
  Radio,
} from 'semantic-ui-react'

const QUESTION_1 = 'Do you own or have consistent access to a car?'
const QUESTION_2 = 'Do you have at least two years driving experience?'

class CarSegment extends React.Component {
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
              <Header content={ QUESTION_1 }/>
              <Form.Field>
                <Radio name='radio1'
                  label='Choose this' value='this'
                  checked={this.state.value === 'this'}
                  onChange={this.handleChange}/>
                <Radio name='radio1'
                  label='Or that' value='that'
                  checked={this.state.value === 'that'}
                  onChange={this.handleChange}/>
              </Form.Field>
              <Header content={ QUESTION_2 }/>
              <Form.Field>
                <Radio name='radio2'
                  label='Choose this' value='this'
                  checked={this.state.value === 'this'}
                  onChange={this.handleChange}/>
                <Radio name='radio2'
                  label='Or that' value='that'
                  checked={this.state.value === 'that'}
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

CarSegment.propTypes = {
}

export default CarSegment

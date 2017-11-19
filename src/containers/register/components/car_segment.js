import React from 'react'
import { Link } from 'react-router-dom'

import {
  Segment,
  Grid,
  Header,
  Form,
  Radio,
  Divider,
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
      <Grid padded>
        <Grid.Column textAlign='center'>
          <Form size='large' onSubmit={ this.props.onSubmit }>
            <Header textAlign='left'
              content={ QUESTION_1 } style={ questionStyle }/>
            <Form.Field style={ optionStyle }>
              <Radio label='Or that' name='radioGroup' value='that'
                style={ optionTextStyle }/>
            </Form.Field>
            <Form.Field style={ optionStyle }>
              <Radio label='Or that' name='radioGroup' value='that'
                style={ optionTextStyle }/>
            </Form.Field>
            <Divider hidden/>
            <Header textAlign='left'
              content={ QUESTION_2 } style={ questionStyle }/>
            <Form.Field style={ optionStyle }>
              <Radio label='Or that' name='radioGroup' value='that'
                style={ optionTextStyle }/>
            </Form.Field>
            <Form.Field style={ optionStyle }>
              <Radio label='Or that' name='radioGroup' value='that'
                style={ optionTextStyle }/>
            </Form.Field>
            <Form.Button color='blue' center size='huge'
              style={ buttonStyle }>
              Next
            </Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

const questionStyle = {
  fontWeight: 'normal',
  fontSize: '1.25em',
  marginBottom: '1.5em',
  marginTop: '0',
}

const optionStyle = {
  textAlign: 'left',
  marginLeft: '1.25em',
}

const optionTextStyle = {
  fontSize: '1em',
}

const buttonStyle = {
  marginTop: '1.25em',
}

CarSegment.propTypes = {
}

export default CarSegment

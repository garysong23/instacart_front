import React from 'react'
import { Link } from 'react-router-dom'

import {
  Segment,
  Grid,
  Form,
  Header,
  Radio
} from 'semantic-ui-react'

const HEADER_TEXT = 'Please select the type of phone you have'

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
      <Grid padded>
        <Grid.Column textAlign='center'>
          <Form size='large' onSubmit={ this.props.onSubmit }>
            <Header textAlign='left'
              content={ HEADER_TEXT } style={ questionStyle }/>
            <Form.Field style={ optionStyle }>
              <Radio label='Or that' name='radioGroup' value='that'
                style={ optionTextStyle }/>
            </Form.Field>
            <Form.Field style={ optionStyle }>
              <Radio label='Or that' name='radioGroup' value='that'
                style={ optionTextStyle }/>
            </Form.Field>
            <Form.Field style={ optionStyle }>
              <Radio label='Or that' name='radioGroup' value='that'
                style={ optionTextStyle }/>
            </Form.Field>
            <Form.Button color='green' center size='large'
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

PhoneModelSegment.propTypes = {
}

export default PhoneModelSegment

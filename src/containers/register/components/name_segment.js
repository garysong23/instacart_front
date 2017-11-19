import React from 'react'

import {
  Segment,
  Grid,
  Form,
  Header,
} from 'semantic-ui-react'

const HEADER_TEXT = 'Welcome to Instacart'
const SUBHEADER_TEXT = 'What is your name?'

class NameSegment extends React.Component {
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
          <Header content={ HEADER_TEXT } style={ headerStyle }/>
          <Header content={ SUBHEADER_TEXT } style={ subHeaderStyle }/>
          <Form size='large'
            onSubmit={ this.props.onSubmit }>
            <Form.Field>
              <Form.Input fluid name='password' icon='lock'
                iconPosition='left' placeholder='First name'
                error={ this.state.showError }/>
            </Form.Field>
            <Form.Field>
              <Form.Input fluid name='inviteCode' icon='ticket'
                iconPosition='left' placeholder='Last name'
                error={ this.state.showError }/>
            </Form.Field>
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
  fontSize: '1.75em',
  marginBottom: '0.75em',
}

const subHeaderStyle = {
  fontWeight: 'normal',
  fontSize: '1.5em',
  marginBottom: '1.5em',
  marginTop: '0',
}

const buttonStyle = {
  marginTop: '1.25em',
}

NameSegment.propTypes = {
}

export default NameSegment

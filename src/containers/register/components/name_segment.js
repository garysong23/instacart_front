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
      <Segment padded>
        <Grid padded>
          <Grid.Column textAlign='center'>
            <Header
              className='font2-5 mb1-25 mt0-5'
              content={ HEADER_TEXT }/>
            <Header
              className='fw-normal font1-75 mt0 mb1-5'
              content={ SUBHEADER_TEXT }/>
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

NameSegment.propTypes = {
}

export default NameSegment

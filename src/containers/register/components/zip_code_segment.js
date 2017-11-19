import React from 'react'
import { Link } from 'react-router-dom'

import {
  Grid,
  Header,
  Form,
} from 'semantic-ui-react'

const HEADER_TEXT = 'Which region can you shop for?'

class ZipCodeSegment extends React.Component {
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
          <Form size='large'
            onSubmit={ this.props.onSubmit }>
            <Form.Field>
              <Form.Input fluid name='password' icon='lock'
                iconPosition='left' placeholder='ZIP Code'
                error={ this.state.showError }/>
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

const headerStyle = {
  fontWeight: 'normal',
  fontSize: '1.5em',
  marginBottom: '1.5em',
  marginTop: '0',
}

const buttonStyle = {
  marginTop: '1.25em',
}

ZipCodeSegment.propTypes = {
}

export default ZipCodeSegment

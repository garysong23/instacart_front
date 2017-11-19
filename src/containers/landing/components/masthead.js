import React from 'react'
import { withRouter } from 'react-router-dom'
import { submitData } from '../requests'

import {
  Segment,
  Container,
  Header,
  Input,
} from 'semantic-ui-react'

const MASK_HEADER_TEXT = 'Welcome to instacart.'
const MASK_SUBHEADER_TEXT = 'Enter your email to get started.'

class MastHead extends React.Component {
  state = {
    email: '',
    showError: false,
  }

  handleSubmit = () => {
    submitData({
      email: this.state.email,
    }).then(() => this.navigateToRegistration())
  }

  navigateToRegistration = () => {
    this.props.history.push('register')
  }

  handleChange = (_env, { name, value }) => this.setState({
    [name]: value,
    showError: false,
  })

  render() {
    return(
      <Segment inverted vertical
        style={ outerSegmentStyle }>
        <Container textAlign='center'
          style={ centerContainerStyle }>
          <Header inverted content={ MASK_HEADER_TEXT } style={ headerStyle }/>
          <Header inverted content={ MASK_SUBHEADER_TEXT } style={ subHeaderStyle }/>
          <Input action='Get Started' name='email' color='green'
            onClick={ this.handleSubmit }
            onChange={ this.handleChange }
            placeholder='hello@instacart.com'/>
        </Container>
      </Segment>
    )
  }
}

const outerSegmentStyle = {
  height: '100vh',
  minHeight: '700px',
  backgroundSize: 'cover',
}

const centerContainerStyle = {
  height: '300px',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  margin: 'auto',
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

export default withRouter(MastHead)

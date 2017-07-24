import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emailChanged } from '../actions'
import { Card, CardSection, Input, Button } from './common'
import PropTypes from 'prop-types'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.onEmailChange = this.onEmailChange.bind(this)
  }
  onEmailChange (text) {
    this.props.emailChanged(text)
  }
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input secureTextEntry label='Password' placeholder='password' />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

LoginForm.propTypes = {
  emailChanged: PropTypes.func,
  email: PropTypes.string
}

const mapStateToProps = state => {
  return {
    email: state.auth.email
  }
}

export default connect(mapStateToProps, { emailChanged })(LoginForm)

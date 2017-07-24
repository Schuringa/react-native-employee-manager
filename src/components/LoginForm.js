import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button } from './common'
import PropTypes from 'prop-types'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onEmailChange (text) {
    this.props.emailChanged(text)
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text)
  }

  onButtonPress () {
    const { email, password } = this.props

    this.props.loginUser({ email, password })
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
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress}>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

LoginForm.propTypes = {
  emailChanged: PropTypes.func,
  passwordChanged: PropTypes.func,
  loginUser: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth
  return {
    email,
    password,
    error
  }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm)

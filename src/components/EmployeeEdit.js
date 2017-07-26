import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate } from '../actions'
import { Card, CardSection, Button } from './common'
import PropTypes from 'prop-types'

class EmployeeEdit extends Component {
  constructor (props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  componentWillMount () {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onButtonPress () {
    const { name, phone, shift } = this.props
    console.log(name, phone, shift)
  }

  render () {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonpress()}>Save Changes</Button>
        </CardSection>
      </Card>
    )
  }
}

EmployeeEdit.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employee: PropTypes.object,
  employeeUpdate: PropTypes.func
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.EmployeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit)

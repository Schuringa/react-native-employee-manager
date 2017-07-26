import React, { Component } from 'react'
import { Card, CardSection, Button } from './common'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions/EmployeeActions'
import EmployeeForm from './EmployeeForm'
import PropTypes from 'prop-types'

class EmployeeCreate extends Component {
  constructor (props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress () {
    const { name, phone, shift } = this.props

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
  }

  render () {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    )
  }
}

EmployeeCreate.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeCreate: PropTypes.func
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(
  EmployeeCreate
)

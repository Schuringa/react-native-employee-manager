import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import { Card, CardSection, Button, Confirm } from './common'
import PropTypes from 'prop-types'

class EmployeeEdit extends Component {
  state = { showModal: false }
  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
    this.onTextPress = this.onTextPress.bind(this)
    this.onAccept = this.onAccept.bind(this)
    this.onDecline = this.onDecline.bind(this)
  }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onButtonPress() {
    const { name, phone, shift } = this.props

    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    })
  }

  onTextPress() {
    const { phone, shift } = this.props
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  onAccept() {
    const { uid } = this.props.employee

    this.props.employeeDelete({ uid })
  }

  onDecline() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={() => this.onButtonPress()}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.onTextPress()}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Fire
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={() => this.onAccept()}
          onDecline={() => this.onDecline()}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    )
  }
}

EmployeeEdit.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employee: PropTypes.object,
  employeeUpdate: PropTypes.func,
  employeeSave: PropTypes.func,
  employeeDelete: PropTypes.func
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit)

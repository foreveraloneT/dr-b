import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { TextField, MenuItem } from '@material-ui/core'
import moment from 'moment'

import { TitleWithBackLayout } from '../../layout'
import {
  Paper,
  ColorPicker,
  SaveButton,
  RequiredErrorText,
} from '../../common'
import { createPatient } from '../../../actions/patient'
import './index.scss'

const genders = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
]

class CreatePatient extends Component {
  static propTypes = {
    createPatientRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }

  inputId = null

  inputFirstname = null

  inputLastname = null

  inputNote = null

  inputYear = null

  state = {
    color: ColorPicker.defaultColor,
    gender: genders[0].value,
    idError: false,
    firstnameError: false,
    lastnameError: false,
    yearError: false,
  }

  onSelectColorHandler = ({ hex: color }) => {
    this.setState({ color })
  }

  validate = () => {
    if (
      this.inputId.value.length > 0 &&
      this.inputFirstname.value.length > 0 &&
      this.inputLastname.value.length > 0 &&
      this.inputYear.value.length > 0
    ) {
      return true
    }

    if (this.inputId.value.length === 0) {
      this.setState({ idError: true })
    }

    if (this.inputFirstname.value.length === 0) {
      this.setState({ firstnameError: true })
    }

    if (this.inputLastname.value.length === 0) {
      this.setState({ lastnameError: true })
    }

    if (this.inputYear.value.length === 0) {
      this.setState({ yearError: true })
    }
    return false
  }

  doSave = () => {
    const { color, gender } = this.state
    const { createPatientRequest, history, match } = this.props
    const groupId = match.params.groupId
    const item = {
      id: this.inputId.value.trim(),
      firstname: this.inputFirstname.value.trim(),
      lastname: this.inputLastname.value.trim(),
      yearOfBirth: Number(this.inputYear.value),
      gender,
      note: this.inputNote.value.trim(),
      color,
      groupId,
    }
    if (this.validate()) {
      this.setState({
        idError: false,
        firstnameError: false,
        lastnameError: false,
        yearError: false,
      })
      createPatientRequest(item)
      history.goBack()
    }
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const {
      idError,
      firstnameError,
      lastnameError,
      yearError,
      gender,
      color
    } = this.state
    return (
      <TitleWithBackLayout
        className="create-group-container"
        title="Add new patient"
      >
        <Paper>
          <TextField
            id="patient-id"
            label="ID"
            placeholder="patient ID"
            margin="normal"
            fullWidth
            inputRef={(input) => { this.inputId = input }}
            required
            error={idError}
          />
          <RequiredErrorText isShow={idError} />

          <TextField
            id="patient-fname"
            label="Firstname"
            placeholder="firstname"
            margin="normal"
            fullWidth
            inputRef={(input) => { this.inputFirstname = input }}
            required
            error={firstnameError}
          />
          <RequiredErrorText isShow={firstnameError} />

          <TextField
            id="patient-lname"
            label="Lastname"
            placeholder="lastname"
            margin="normal"
            fullWidth
            inputRef={(input) => { this.inputLastname = input }}
            required
            error={lastnameError}
          />
          <RequiredErrorText isShow={lastnameError} />

          <TextField
            id="patient-year"
            label="Year of birth"
            placeholder="ex. 1992"
            defaultValue={moment().format('YYYY')}
            type="number"
            margin="normal"
            fullWidth
            inputRef={(input) => { this.inputYear = input }}
            required
            error={yearError}
          />
          <RequiredErrorText isShow={yearError} />

          <TextField
            id="patient-gender"
            select
            fullWidth
            label="Gender"
            value={gender}
            margin="normal"
            onChange={this.handleChange('gender')}
          >
            {genders.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="patient-note"
            label="Note"
            placeholder="Note (optional)"
            multiline
            fullWidth
            rows="2"
            inputRef={(input) => { this.inputNote = input }}
            margin="normal"
          />

          <ColorPicker value={color} onSelect={this.onSelectColorHandler} />
          <div
            style={{
              margin: '10px 0',
              textAlign: 'right',
            }}
          >
            <SaveButton onClick={this.doSave} />
          </div>
        </Paper>
      </TitleWithBackLayout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPatientRequest: (params) => { dispatch(createPatient.request(params)) },
})

export default compose(
  connect(null, mapDispatchToProps),
  withRouter,
)(CreatePatient)

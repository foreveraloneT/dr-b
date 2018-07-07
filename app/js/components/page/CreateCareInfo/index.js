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
} from '../../common'
import { createCareInfo } from '../../../actions/care-info'
import './index.scss'

const debridements = [
  {
    value: 'Sharp',
    label: 'Sharp',
  },
  {
    value: 'Ultrasonic',
    label: 'Ultrasonic',
  },
  {
    value: 'Versajet',
    label: 'Versajet',
  },
]

const adjunctives = [
  {
    value: 'PRP',
    label: 'PRP',
  },
  {
    value: 'Mensen. cell',
    label: 'Mensen. cell',
  },
  {
    value: 'Plasma',
    label: 'Plasma',
  },
  {
    value: 'Shock wave',
    label: 'Shock wave',
  },
]

const oxygenTherapies = [
  {
    value: 'Hb spray',
    label: 'Hb spray',
  },
  {
    value: 'Natrox',
    label: 'Natrox',
  },
  {
    value: 'HBOT',
    label: 'HBOT',
  },
]


class CreateCareInfo extends Component {
  static propTypes = {
    createCareInfoRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }

  state = {
    color: ColorPicker.defaultColor,
    debridement: debridements[0].value,
    adjunctive: adjunctives[0].value,
    oxygenTherapy: oxygenTherapies[0].value
  }

  inputRemark = null

  inputDate = null

  onSelectColorHandler = ({ hex: color }) => {
    this.setState({ color })
  }

  validate = () => {
    return true
  }

  doSave = () => {
    const {
      color,
      debridement,
      adjunctive,
      oxygenTherapy,
    } = this.state
    const { createCareInfoRequest, history, match } = this.props
    const patientId = match.params.patientId
    const item = {
      date: moment(this.inputDate.value).format('x'),
      debridement,
      adjunctive,
      oxygenTherapy,
      remark: this.inputRemark.value.trim(),
      color,
      patientId,
    }
    if (this.validate()) {
      createCareInfoRequest(item)
      history.goBack()
    }
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const {
      debridement,
      adjunctive,
      oxygenTherapy,
      color
    } = this.state
    return (
      <TitleWithBackLayout
        className="care-info-container"
        title="Add new care information"
      >
        <Paper>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={moment().format('YYYY-MM-DD')}
            required
            fullWidth
            inputRef={(input) => { this.inputDate = input }}
          />

          <TextField
            id="debridement"
            select
            fullWidth
            label="Debridement"
            value={debridement}
            margin="normal"
            required
            onChange={this.handleChange('debridement')}
          >
            {debridements.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="adjunctive"
            select
            fullWidth
            label="Adjunctive"
            value={adjunctive}
            margin="normal"
            required
            onChange={this.handleChange('adjunctive')}
          >
            {adjunctives.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="oxygen"
            select
            fullWidth
            label="Oxygen therapy"
            value={oxygenTherapy}
            margin="normal"
            required
            onChange={this.handleChange('oxygenTherapy')}
          >
            {oxygenTherapies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="patient-note"
            label="Remark"
            placeholder="remark (optional)"
            multiline
            fullWidth
            rows="2"
            inputRef={(input) => { this.inputRemark = input }}
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
  createCareInfoRequest: (params) => { dispatch(createCareInfo.request(params)) },
})

export default compose(
  connect(null, mapDispatchToProps),
  withRouter,
)(CreateCareInfo)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

import { TitleWithBackLayout } from '../../layout'
import {
  Paper,
  ColorPicker,
  SaveButton,
  RequiredErrorText,
} from '../../common'
import './index.scss'

class CreateGroup extends Component {
  inputName = ''

  inputDesc = ''

  state = {
    color: ColorPicker.defaultColor,
    nameError: false
  }

  onSelectColorHandler = ({ hex: color }) => {
    this.setState({ color })
  }

  validate = () => {
    if (this.inputName.value.length > 0) {
      return true
    }
    this.setState({ nameError: true })
    return false
  }

  doSave = () => {
    const { color } = this.state
    const group = {
      name: this.inputName.value,
      description: this.inputDesc.value,
      color,
    }
    if (this.validate()) {
      this.setState({ nameError: false })
      console.log(group)
    }
  }

  render() {
    const { nameError } = this.state
    return (
      <TitleWithBackLayout
        className="create-group-container"
        title="Add new group"
      >
        <Paper>
          <TextField
            id="group-name"
            label="Name"
            placeholder="group name"
            margin="normal"
            fullWidth
            inputRef={(input) => { this.inputName = input }}
            required
            error={nameError}
          />
          <RequiredErrorText isShow={nameError} />

          <TextField
            id="group-description"
            label="Description"
            placeholder="description (optional)"
            multiline
            fullWidth
            rows="2"
            inputRef={(input) => { this.inputDesc = input }}
            margin="normal"
          />
          <ColorPicker onSelect={this.onSelectColorHandler} />
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

export default CreateGroup

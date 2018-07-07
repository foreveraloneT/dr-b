import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

import { TitleWithBackLayout } from '../../layout'
import {
  Paper,
  ColorPicker,
  SaveButton,
  RequiredErrorText,
} from '../../common'
import { createGroup } from '../../../actions/group'
import './index.scss'

class CreateGroup extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    createGroupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

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
    const { createGroupRequest, history } = this.props
    const group = {
      name: this.inputName.value.trim(),
      description: this.inputDesc.value.trim(),
      color,
    }
    if (this.validate()) {
      this.setState({ nameError: false })
      createGroupRequest(group)
      history.goBack()
    }
  }

  render() {
    const { nameError, color } = this.state
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

const mapStateToProps = state => ({
  isLoading: state.group.isLoading,
})

const mapDispatchToProps = dispatch => ({
  createGroupRequest: (params) => { dispatch(createGroup.request(params)) },
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(CreateGroup)

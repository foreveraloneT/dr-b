import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RenderModal extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = {
    isOpen: false,
  }

  doOpenModal = () => {
    this.setState({ isOpen: true })
  }

  doCloseModal = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <div>
        { this.props.children(this.state.isOpen, this.doOpenModal, this.doCloseModal) }
      </div>
    )
  }
}

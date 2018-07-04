import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class Favorite extends Component {
  render() {
    return (
      <div className="favorite-container">
        <img src='/static/images/logo.png' />
        <div className="red-text">Favorite</div>
      </div>
    )
  }
}

export default Favorite

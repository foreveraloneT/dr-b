import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { NoData } from '../../common'
import './index.scss'

class Favorite extends Component {
  render() {
    return (
      <div className="favorite-container">
        <NoData />
      </div>
    )
  }
}

export default Favorite

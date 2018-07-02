import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img src='/static/images/logo.png' />
        <div className="red-text">Hello from me</div>
        <div>This is <b>{process.env.NODE_ENV}</b> mode</div>
        <div>
          <Link to="/test">Test link here.</Link>
        </div>
      </div>
    )
  }
}

export default Home

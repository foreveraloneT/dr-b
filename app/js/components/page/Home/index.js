import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { BottomAddMenu } from '../../common'
import Group from '../../../lib/model/Group'
import './index.scss'

class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  testAddRoom = async () => {
    const group = new Group()
    // const room = {
    //   name: 'test55',
    //   color: '#FF0000'
    // }
    // await group.add(room)
    console.log(await group.updateById('ugb565krm8', { name: 'test2', color: '#ff00ff' }))
  }

  goToAddGroupPage = () => {
    const { history } = this.props
    history.push('/group/create')
  }

  render() {
    return (
      <div className="home-container">
        <img src='/static/images/logo.png' />
        <div className="red-text">Hello from me</div>
        <div>This is <b>{process.env.NODE_ENV}</b> mode</div>
        <BottomAddMenu onClick={this.goToAddGroupPage} />
      </div>
    )
  }
}

export default withRouter(Home)

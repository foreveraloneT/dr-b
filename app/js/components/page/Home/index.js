import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { MainLayout } from '../../layout'
import { BottomAddMenu } from '../../common'
import Group from '../../../lib/model/Group'
import './index.scss'

class Home extends Component {
  testAddRoom = async () => {
    const group = new Group()
    // const room = {
    //   name: 'test55',
    //   color: '#FF0000'
    // }
    // await group.add(room)
    console.log(await group.updateById('ugb565krm8', { name: 'test2', color: '#ff00ff' }))
  }

  render() {
    return (
      <MainLayout className="home-container">
        <img src='/static/images/logo.png' />
        <div className="red-text">Hello from me</div>
        <div>This is <b>{process.env.NODE_ENV}</b> mode</div>
        <div>
          <Link to="/test">Test link here.</Link>
        </div>
        <BottomAddMenu onClick={this.testAddRoom} />
      </MainLayout>
    )
  }
}

export default Home

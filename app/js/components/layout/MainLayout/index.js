import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core'
import {
  Menu as MenuIcon,
} from '@material-ui/icons'

import { SearchInput } from '../../common'

class MainLayout extends Component {
  render() {
    return (
      <div className="main-layput-wrapper">
        <AppBar position="static">
          <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <SearchInput
                id="uni-search"
                placeholder="search"
              />
          </Toolbar>
        </AppBar>
        { this.props.children }
      </div>
    )
  }
}

export default MainLayout
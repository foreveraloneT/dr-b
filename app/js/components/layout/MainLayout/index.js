import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Container } from 'react-grid-system'
import {
  Toolbar,
  IconButton,
} from '@material-ui/core'
import {
  AccountCircle as AccountIcon,
} from '@material-ui/icons'

import {
  SearchInput,
  AppBar,
  NavigationMenu,
} from '../../common'
import './index.scss'

class MainLayout extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  render() {
    const { className } = this.props

    return (
      <div className={classNames('main-layput-wrapper', className)}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton>
              <AccountIcon style={{ fontSize: 34 }} />
            </IconButton>
            <SearchInput
              id="uni-search"
              placeholder="search"
            />
          </Toolbar>
        </AppBar>
        <NavigationMenu />
        <Container style={{ marginTop: 10 }}>
          {this.props.children}
        </Container>
      </div>
    )
  }
}

export default MainLayout

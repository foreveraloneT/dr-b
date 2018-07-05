import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'
import {
  Folder as FolderIcon,
  Star as FavoriteIcon,
  Menu as MenuIcon,
} from '@material-ui/icons'
import { withRouter } from 'react-router-dom'

import './index.scss'

class NavigationMenu extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  static getDerivedStateFromProps(props) {
    const { location } = props
    switch (location.pathname) {
      case '/':
        return { page: 0 }
      case '/favorite':
        return { page: 1 }
      case '/others':
        return { page: 2 }
      default:
        return { page: 0 }
    }
  }

  state = {
    page: 0
  }

  goto = (uri) => {
    const { history } = this.props
    history.push(uri)
  }

  render() {
    const { page } = this.state
    return (
      <BottomNavigation
        value={page}
        className="navi-menu"
        showLabels
        {...this.props}
      >
        <BottomNavigationAction
          label=''
          icon={<FolderIcon />}
          onClick={() => this.goto('/')}
        />
        <BottomNavigationAction
          label=''
          icon={<FavoriteIcon />}
          onClick={() => this.goto('/favorite')}
        />
        <BottomNavigationAction
          label=''
          icon={<MenuIcon />}
          onClick={() => this.goto('/others')}
        />
      </BottomNavigation>
    )
  }
}

export default withRouter(NavigationMenu)

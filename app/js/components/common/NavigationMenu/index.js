import React, { Component } from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'
import {
  Folder as FolderIcon,
  Favorite as FavoriteIcon,
  Menu as MenuIcon,
} from '@material-ui/icons'

import './index.scss'

class NavigationMenu extends Component {
  render() {
    return (
      <BottomNavigation
        value={0}
        className="navi-menu"
        showLabels
      >
        <BottomNavigationAction label='' icon={<FolderIcon />} />
        <BottomNavigationAction label='' icon={<FavoriteIcon />} />
        <BottomNavigationAction label='' icon={<MenuIcon />} />
      </BottomNavigation>
    )
  }
}

export default NavigationMenu

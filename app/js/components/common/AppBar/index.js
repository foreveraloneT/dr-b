import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  AppBar,
} from '@material-ui/core'
import './index.scss'

const CommonAppBar = ({ className, children, ...props }) => (
  <AppBar
    position="static"
    className={classNames('app-bar', className)}
    {...props}
  >
    {children}
  </AppBar>
)

AppBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

AppBar.defaultProps = {
  className: '',
}

export default CommonAppBar

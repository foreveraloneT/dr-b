import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Container } from 'react-grid-system'
import {
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core'
import {
  KeyboardBackspace as BackIcon,
} from '@material-ui/icons'
import { withRouter } from 'react-router-dom'

import {
  AppBar,
} from '../../common'
import './index.scss'

class TitleWithBackLayout extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    componentAfterAppBar: PropTypes.element,
  }

  static defaultProps = {
    className: '',
    title: 'Title',
  }

  goBack = () => {
    const { history } = this.props
    history.goBack()
  }

  render() {
    const { className, title, componentAfterAppBar, children } = this.props
    return (
      <div className={classNames('title-layput-wrapper', className)}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton>
              <BackIcon
                onClick={this.goBack}
              />
            </IconButton>
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        {componentAfterAppBar}
        <Container style={{ marginTop: 10 }}>
          {children}
        </Container>
      </div>
    )
  }
}

export default withRouter(TitleWithBackLayout)

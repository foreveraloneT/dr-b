import React, { Component } from 'react'
import { Typography, Toolbar } from '@material-ui/core'
import {
  SettingsApplications as VersionIcon
} from '@material-ui/icons'

import { Paper } from '../../common'
import pjson from '../../../../../package.json'
import './index.scss'

class Others extends Component {
  render() {
    return (
      <div className="favorite-container">
        <Paper>
          <Toolbar>
            <VersionIcon style={{ marginRight: 5 }} />
            <Typography variant="headline">
              App version: {pjson.version}
            </Typography>
          </Toolbar>
        </Paper>
      </div>
    )
  }
}

export default Others

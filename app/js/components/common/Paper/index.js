import React from 'react'
import { Paper } from '@material-ui/core'

import './index.scss'

const CommonPaper = props => (
  <Paper
    elevation={0}
    className="common-paper"
    {...props}
  />
)

export default CommonPaper

import React from 'react'
import {
  Portal,
  IconButton,
} from '@material-ui/core'
import { AddCircleOutline as AddIcon } from '@material-ui/icons'

import './index.scss'

const BottomAddMenu = props => (
  <Portal>
    <div className="bottom-add-menu-wrapper">
      <IconButton
        { ...props }
      >
        <AddIcon
          style={{
            fontSize: 34,
            color: 'rgba(0, 0, 0, 0.54)',
          }}
        />
      </IconButton>
    </div>
  </Portal>
)

export default BottomAddMenu

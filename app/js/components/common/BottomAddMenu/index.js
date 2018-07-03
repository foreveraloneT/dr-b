import React from 'react'
import {
  Portal,
  Button,
} from '@material-ui/core'
import { AddCircleOutline as AddIcon } from '@material-ui/icons'

import './index.scss'

const BottomAddMenu = props => (
  <Portal>
    <div className="bottom-add-menu-wrapper">
      <Button
        variant="outlined"
        size="large"
        { ...props }
      >
        <AddIcon
          style={{
            fontSize: 34,
            color: 'rgba(0, 0, 0, 0.54)',
          }}
        />
      </Button>
    </div>
  </Portal>
)

export default BottomAddMenu

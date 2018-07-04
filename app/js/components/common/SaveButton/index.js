import React from 'react'
import { Button } from '@material-ui/core'
import { Save as SaveIcon } from '@material-ui/icons'

const SaveButton = props => (
  <Button
    {...props}
    variant="contained"
    size="medium"
    color="primary"
  >
    <SaveIcon style={{ marginRight: 5 }} />
    Save
  </Button>
)

export default SaveButton

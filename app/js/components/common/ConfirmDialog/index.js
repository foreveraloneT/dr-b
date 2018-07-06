import React from 'react'
import PropTypes from 'prop-types'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core'

const ConfirmDialog = ({ open = false, title = '', content = '', onCancel, onConfirm }) => (
  <Dialog
    open={open}
    onClose={(event) => {
      onCancel(event)
      event.stopPropagation()
    }}
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={(event) => {
          onCancel(event)
          event.stopPropagation()
        }}
        color="primary"
      >
        Cancel
      </Button>
      <Button
        onClick={(event) => {
          onConfirm(event)
          event.stopPropagation()
        }}
        color="primary"
        autoFocus
      >
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
)

ConfirmDialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  open: PropTypes.bool,
}

export default ConfirmDialog

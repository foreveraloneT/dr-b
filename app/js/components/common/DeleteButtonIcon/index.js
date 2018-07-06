import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import {
  Delete as DeleteIcon,
} from '@material-ui/icons'

import RenderModal from '../RenderModal'
import ConfirmDialog from '../ConfirmDialog'

const DeleteButtonIcon = ({ onDelete }) => (
  <RenderModal>
    {
      (isOpen, doOpen, doClose) => {
        return (
          <Fragment>
            <IconButton>
              <DeleteIcon
                onClick={(event) => {
                  doOpen()
                  event.stopPropagation()
                }}
              />
            </IconButton>
            <ConfirmDialog
              open={isOpen}
              title="Delete this item ?"
              content="Are you sure to delete this item ?"
              onConfirm={() => {
                onDelete()
                doClose()
              }}
              onCancel={doClose}
            />
          </Fragment>
        )
      }
    }
  </RenderModal>
)

DeleteButtonIcon.propTypes = {
  onDelete: PropTypes.func.isRequired,
}

export default DeleteButtonIcon

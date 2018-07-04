import React from 'react'
import PropTypes from 'prop-types'
import { FormHelperText } from '@material-ui/core'

const RequiredErrorText = ({ isShow, ...props }) => {
  if (isShow) {
    return (
      <FormHelperText {...props}>required field</FormHelperText>
    )
  }
  return null
}

RequiredErrorText.propTypes = {
  isShow: PropTypes.bool.isRequired
}

export default RequiredErrorText

import React from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  InputAdornment,
} from '@material-ui/core'
import {
  Search as SearchIcon,
} from '@material-ui/icons'

const SearchInput = ({ id, ...props }) => (
  <Input
    id={id}
    fullWidth
    startAdornment={
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    }
    {...props}
  />
)

SearchInput.propTypes = {
  id: PropTypes.string.isRequired,
}


export default SearchInput

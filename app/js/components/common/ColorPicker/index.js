import React from 'react'
import PropTypes from 'prop-types'
import { CirclePicker } from 'react-color'

import './index.scss'

const COLOR_SET = [
  '#ABB8C3',
  '#E91E63',
  '#009688',
  '#FFC107',
  '#2196F3',
]

const ColorPicker = ({ onSelect, value, ...props }) => (
  <div className="color-picker-wrapper">
    <CirclePicker
      {...props}
      colors={COLOR_SET}
      color={value}
      circleSize={36}
      onChangeComplete={onSelect}
    />
  </div>
)

ColorPicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
}

ColorPicker.defaultColor = COLOR_SET[0]

export default ColorPicker

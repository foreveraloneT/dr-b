import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.scss'

const Icon = ({
  className,
  style,
  size,
  // for className icon
  iconClassName,
  color,
  hoverColor,
  //  for img icon
  iconImage,
  hoverImage,
  hoverOpacity,
  ...props,
}) => {
  if (iconImage.length > 0) {
    const wrapperStyle = {
      width: `${size}px`,
      height: `${size}px`,
      display: 'inline-block',
    }
    const imgIconStyle = {
      width: `${size}px`,
      height: `${size}px`,
      '--icon-img': `url('${iconImage}')`,
      '--hover-img': hoverImage.length > 0 ? `url('${hoverImage}')` : `url('${iconImage}')`,
      '--hover-opacity': hoverOpacity,
      ...style,
    }
    return (
      <div
        className="bo-icon-wrapper"
        style={wrapperStyle}
        {...props}
      >
        <div
          className={classNames('bo-icon-img', className)}
          style={imgIconStyle}
        />
      </div>
    )
  }
  const classIconStyle = {
    fontSize: `${size}px`,
    '--icon-color': color,
    '--hover-color': hoverColor,
    ...style,
  }
  return (
    <div
      className="bo-icon-wrapper"
      {...props}
    >
      <i
        className={classNames(iconClassName, 'bo-icon-class', className)}
        style={classIconStyle}
      />
    </div>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.number,
  /** For icon type className */
  iconClassName: PropTypes.string,
  /** For icon type className */
  color: PropTypes.string,
  /** For icon type className */
  hoverColor: PropTypes.string,
  /** For icon type image */
  iconImage: PropTypes.string,
  /** For icon type image */
  hoverImage: PropTypes.string,
  /** For icon type image */
  hoverOpacity: PropTypes.number,
}

Icon.defaultProps = {
  className: '',
  style: {},
  size: 12,

  iconClassName: '',
  color: '#0e2b4d',
  hoverColor: '#0e2b4d',

  iconImage: '',
  hoverImage: '',
  hoverOpacity: 1,
}

export default Icon

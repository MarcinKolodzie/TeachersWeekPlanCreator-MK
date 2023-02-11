import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const FullPageLayout = (props) => {
  const {
    className,
    children,
    subject1,
    subject2,
    subject3,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {children}
    </div>
  )
}

FullPageLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  subject1: PropTypes.string,
  subject2: PropTypes.string,
  subject3: PropTypes.string
}

export default FullPageLayout

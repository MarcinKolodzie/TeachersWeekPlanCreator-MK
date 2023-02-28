import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Typography from '../Typography'

export const StyledTextHead = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Typography
        variant={'h1'}
      >
        My awsome week with:
      </Typography>
      {children}
    </div>
  )
}

StyledTextHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default StyledTextHead

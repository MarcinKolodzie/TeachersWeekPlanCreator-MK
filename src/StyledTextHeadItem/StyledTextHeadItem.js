import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Typography from '../Typography'

export const StyledTextHeadItem = (props) => {
  const {
    className,
    text,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Typography
        variant={'h2-cra'}
      >
        {text}
      </Typography>
    </div>
  )
}

StyledTextHeadItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

export default StyledTextHeadItem

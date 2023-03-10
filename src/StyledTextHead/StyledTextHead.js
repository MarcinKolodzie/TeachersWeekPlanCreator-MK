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
      <div>
        <Typography
          variant={'h1-cra'}
        >
          My awsome week with:
        </Typography>
      </div>
      <div
        className={classes.subjectWrapper}
      >
        {children}
      </div>
    </div>
  )
}

StyledTextHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default StyledTextHead

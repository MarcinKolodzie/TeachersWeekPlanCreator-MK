import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import TextField from '../TextField'
import Typography from '../Typography'

export const CreateDayPlan = (props) => {
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
        className={classes.header}
        variant={'h1'}
      >
        {children}
      </Typography>
      <TextField
        placeholder={'subject'}
      >
      </TextField>
    </div>
  )
}

CreateDayPlan.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default CreateDayPlan

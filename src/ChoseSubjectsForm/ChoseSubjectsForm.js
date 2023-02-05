import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Typography from '../Typography'
import TextField from '../TextField'

export const ChoseSubjectsForm = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Typography
        className={classes.header}
        variant={'h3'}
      >
        Chose subjests (up to 3)
      </Typography>
      <TextField
        className={classes.textField}
        placeholder={'Suject 1'}
      >

      </TextField>
    </div>
  )
}

ChoseSubjectsForm.propTypes = {
  className: PropTypes.string
}

export default ChoseSubjectsForm

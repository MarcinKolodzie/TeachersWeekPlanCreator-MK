import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Typography from '../Typography/Typography'

export const WelcomeForm = (props) => {
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
        variant={'h1'}
      >
        Welcome in Week Paln Creator
      </Typography>
      <br />
      <Typography
        className={classes.header}
        variant={'h3'}
      >
        Chose subjests (up to 3)
      </Typography>
    </div>
  )
}

WelcomeForm.propTypes = {
  className: PropTypes.string
}

export default WelcomeForm

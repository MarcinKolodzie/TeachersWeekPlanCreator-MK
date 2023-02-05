import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Typography from '../Typography'

export const CreateDayNumber = (props) => {
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
      <Typography
        className={classes.header}
        variant={'h1'}
      >
        1.
      </Typography>
      <Typography
        className={classes.header}
        variant={'h1'}
      >
        2.
      </Typography>
      <Typography
        className={classes.header}
        variant={'h1'}
      >
        3.
      </Typography>
      <Typography
        className={classes.header}
        variant={'h1'}
      >
        4.
      </Typography>
      <Typography
        className={classes.header}
        variant={'h1'}
      >
        5.
      </Typography>
      <Typography
        className={classes.header}
        variant={'h1'}
      >
        6.
      </Typography>
      <Typography
        className={classes.header}
        variant={'h1'}
      >
        7.
      </Typography>
      <Typography
        className={classes.header}
        variant={'h1'}
      >
        8.
      </Typography>
      <Typography
        className={classes.header}
        variant={'h1'}
      >
        9.
      </Typography>
      <Typography
        className={classes.header}
        variant={'h1'}
      >
        10.
      </Typography>

    </div>
  )
}

CreateDayNumber.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default CreateDayNumber

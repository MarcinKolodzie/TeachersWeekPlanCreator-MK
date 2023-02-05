import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Typography from '../Typography'
import Button from '../Button'

export const WelcomeForm = (props) => {
  const {
    className,
    onClickGoChoseSubjects,
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
        App helps you create fantastic personal week plan
      </Typography>
      <Button
        className={classes.button}
        variant={'contained'}
        color={'primary'}
        onClick={onClickGoChoseSubjects}
      >
        GO chose subjects
      </Button>
    </div>
  )
}

WelcomeForm.propTypes = {
  className: PropTypes.string,
  onClickGoChoseSubjects: PropTypes.func
}

export default WelcomeForm

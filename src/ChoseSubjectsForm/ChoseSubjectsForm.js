import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Typography from '../Typography'
import TextField from '../TextField'
import Button from '../Button'

export const ChoseSubjectsForm = (props) => {
  const {
    className,
    subject1,
    subject2,
    subject3,
    onClickGoBackToWelcome,
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
        Chose subjests (up to 3)
      </Typography>
      <TextField
        className={classes.textField}
        placeholder={'Subject 1'}
        value={subject1}
      />
      <TextField
        className={classes.textField}
        placeholder={'Subject 2'}
        value={subject2}
      />
      <TextField
        className={classes.textField}
        placeholder={'Subject 3'}
        value={subject3}
      />
      <Button
        className={classes.button}
        variant={'contained'}
        color={'primary'}
      >
        Create WEEK PLAN
      </Button>
      <Button
        className={classes.button}
        variant={'contained'}
        color={'secondary'}
        onClick={onClickGoBackToWelcome}
      >
        BACK
      </Button>
    </div>
  )
}

ChoseSubjectsForm.propTypes = {
  className: PropTypes.string,
  subject1: PropTypes.string,
  subject2: PropTypes.string,
  subject3: PropTypes.string,
  onClickGoBackToWelcome: PropTypes.func
}

export default ChoseSubjectsForm

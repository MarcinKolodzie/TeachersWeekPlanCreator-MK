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
    onChangeSubject1,
    onChangeSubject2,
    onChangeSubject3,
    onClickGoCreate,
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
        maxLength={12}
        onChange={onChangeSubject1}
      />
      <TextField
        className={classes.textField}
        placeholder={'Subject 2'}
        value={subject2}
        maxLength={12}
        onChange={onChangeSubject2}
      />
      <TextField
        className={classes.textField}
        placeholder={'Subject 3'}
        value={subject3}
        maxLength={12}
        onChange={onChangeSubject3}
      />
      <Button
        className={classes.button}
        variant={'contained'}
        color={'primary'}
        onClick={onClickGoCreate}
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
  onChangeSubject1: PropTypes.func,
  onChangeSubject2: PropTypes.func,
  onChangeSubject3: PropTypes.func,
  onClickGoCreate: PropTypes.func,
  onClickGoBackToWelcome: PropTypes.func
}

export default ChoseSubjectsForm

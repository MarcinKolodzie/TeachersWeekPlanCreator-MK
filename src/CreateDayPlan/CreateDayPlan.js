import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Typography from '../Typography'
import SubjectForm from '../SubjectForm/SubjectForm'

export const CreateDayPlan = (props) => {
  const {
    className,
    children,
    subject1,
    subject2,
    subject3,
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
      <SubjectForm
        className={classes.form}
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
      </SubjectForm>
      <SubjectForm
        className={classes.form}
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
      </SubjectForm>
      <SubjectForm
        className={classes.form}
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
      </SubjectForm>
      <SubjectForm
        className={classes.form}
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
      </SubjectForm>
      <SubjectForm
        className={classes.form}
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
      </SubjectForm>
      <SubjectForm
        className={classes.form}
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
      </SubjectForm>
      <SubjectForm
        className={classes.form}
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
      </SubjectForm>
      <SubjectForm
        className={classes.form}
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
      </SubjectForm>
      <SubjectForm
        className={classes.form}
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
      </SubjectForm>
      <SubjectForm
        className={classes.form}
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
      </SubjectForm>
    </div>
  )
}

CreateDayPlan.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  subject1: PropTypes.string,
  subject2: PropTypes.string,
  subject3: PropTypes.string
}

export default CreateDayPlan

import React from 'react'
import PropTypes from 'prop-types'
import CreateDayPlan from '../CreateDayPlan'
import CreateDayNumber from '../CreateDayNumber'
import classes from './styles.module.css'

export const CreateWeekPlan = (props) => {
  const {
    className,
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
      <CreateDayNumber>
        No
      </CreateDayNumber>
      <CreateDayPlan
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
        Monday
      </CreateDayPlan>
      <CreateDayPlan
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
        Tuesday
      </CreateDayPlan>
      <CreateDayPlan
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
        Wednesday
      </CreateDayPlan>
      <CreateDayPlan
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
        Thursday
      </CreateDayPlan>
      <CreateDayPlan
        subject1 = {subject1}
        subject2 = {subject2}
        subject3 = {subject3}
      >
        Friday
      </CreateDayPlan>
    </div>
  )
}

CreateWeekPlan.propTypes = {
  className: PropTypes.string,
  subject1: PropTypes.string,
  subject2: PropTypes.string,
  subject3: PropTypes.string
}

export default CreateWeekPlan

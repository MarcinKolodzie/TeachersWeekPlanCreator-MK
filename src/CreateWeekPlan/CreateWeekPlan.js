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
    onChangeSubject1,
    onChangeSubject2,
    onChangeSubject3,
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
      <CreateDayPlan >
        Tuesday
      </CreateDayPlan>
      <CreateDayPlan >
        Wednesday
      </CreateDayPlan>
      <CreateDayPlan >
        Thursday
      </CreateDayPlan>
      <CreateDayPlan >
        Friday
      </CreateDayPlan>
    </div>
  )
}
// console.log(value1)

CreateWeekPlan.propTypes = {
  className: PropTypes.string,
  subject1: PropTypes.string,
  subject2: PropTypes.string,
  subject3: PropTypes.string,
  onChangeSubject1: PropTypes.func,
  onChangeSubject2: PropTypes.func,
  onChangeSubject3: PropTypes.func
}

export default CreateWeekPlan

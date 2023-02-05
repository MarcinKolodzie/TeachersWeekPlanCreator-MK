import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import CreateDayPlan from '../CreateDayPlan'
import CreateDayNumber from '../CreateDayNumber'

export const CreateWeekPlan = (props) => {
  const {
    className,
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
      <CreateDayPlan>
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

CreateWeekPlan.propTypes = {
  className: PropTypes.string
}

export default CreateWeekPlan

import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

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
    </div>
  )
}

CreateWeekPlan.propTypes = {
  className: PropTypes.string
}

export default CreateWeekPlan

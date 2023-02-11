import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

export const SubjectForm = (props) => {
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
      <select
        name={'chose subject'}
        // className={classes.select}
      >
        <option value={subject1}>{subject1}</option>
        <option value={subject2}>{subject2}</option>
        <option value={subject3}>{subject3}</option>
      </select>
    </div>
  )
}

SubjectForm.propTypes = {
  className: PropTypes.string,
  subject1: PropTypes.string,
  subject2: PropTypes.string,
  subject3: PropTypes.string
}

export default SubjectForm

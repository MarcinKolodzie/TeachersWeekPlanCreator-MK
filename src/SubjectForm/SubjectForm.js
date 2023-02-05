import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

export const SubjectForm = (props) => {
  const {
    className,
    subject1,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <select name={'chose subject'}>
        <option value={'first'}>{subject1}</option>
        <option value={'second'}>SECOND</option>
        <option value={'third'}>THIRD</option>
      </select>
    </div>
  )
}

SubjectForm.propTypes = {
  className: PropTypes.string,
  subject1: PropTypes.string
}

export default SubjectForm

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
        className={'subject'}
      >
        <option value={'none'}>none</option>
        <option value={subject1}>{subject1}</option>
        <option value={subject2}>{subject2}</option>
        <option value={subject3}>{subject3}</option>
      </select>
      <select
        className={'chose-class'}
      >
        <option value={''}>-</option>
        <option value={'4'}>4</option>
        <option value={'5'}>5</option>
        <option value={'6'}>6</option>
        <option value={'7'}>7</option>
        <option value={'8'}>8</option>
      </select>
      <select
        className={'chose-classSection'}
      >
        <option value={''}>-</option>
        <option value={'a'}>a</option>
        <option value={'b'}>b</option>
        <option value={'c'}>c</option>
        <option value={'d'}>d</option>
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

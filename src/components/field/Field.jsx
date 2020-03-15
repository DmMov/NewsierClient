import React from 'react'
import classnames from 'classnames';

export const Field = ({ control: Control, label, placeholder, name, value, type, change, error }) =>
  <label
    htmlFor={`${name}-control`}
    className={classnames('field', `${name}-field`, error)}
  >
    <span className="field__label">{ label }</span>
    <Control
      id={`${name}-control`}
      name={name}
      value={value}
      type={type}
      className={classnames(`${name}-control`)}
      onChange={change}
      placeholder={placeholder}
    />
    { error && <span className="field__error">{ error }</span> }
  </label>

Field.defaultProps = {
  control: 'input',
  type: 'text'
}
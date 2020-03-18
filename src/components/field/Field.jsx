import React from 'react';
import classnames from 'classnames';
import { string, func } from 'prop-types';

// * Sass
import './Field.scss';

export const Field = ({ control: Control, label, placeholder, name, value, type, change, error }) =>
  <label
    htmlFor={`${name}-control`}
    className={classnames('field', `${name}-field`, !!error && 'error')}
  >
    <span className="field__label">{ label }</span>
    <Control
      id={`${name}__control`}
      name={name}
      value={value}
      type={type}
      className={classnames('field__control', `${name}-field__control`)}
      onChange={change}
      placeholder={placeholder}
    />
    { error && <span className="field__error">{ error }</span> }
  </label>

Field.defaultProps = {
  control: 'input',
  type: 'text'
}

Field.propTypes = {
  control: string,
  label: string,
  placeholder: string,
  name: string,
  value: string,
  type: string,
  change: func,
  error: string
}
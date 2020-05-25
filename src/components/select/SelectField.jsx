import React from 'react';
import { func, string, arrayOf, shape } from 'prop-types';
import classnames from 'classnames';

// * Sass
import './SelectField.scss';

export const SelectField = ({ label, placeholder, name, value, error, onChange, options }) =>
  <label
    htmlFor={`${name}__control`}
    className={classnames('selectField', `${name}SelectField`, !!error && 'error')}
  >
    <span className="selectField__label">{label}</span>
    <select
      id={`${name}__control`}
      name={name}
      value={value}
      onChange={onChange}
      className={classnames('selectField__control', `${name}SelectField__control`)}
    >
      <option disabled value=''>{placeholder}</option>
      {options.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
    </select>
    {error && <span className="field__error">{error}</span>}
  </label>;

SelectField.propTypes = {
  label: string,
  placeholder: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  error: string,
  onChange: func.isRequired,
  options: arrayOf(shape({ id: string, name: string })).isRequired
};
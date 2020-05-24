import React from 'react';
import classnames from 'classnames';
import { arrayOf, func, string } from 'prop-types';

// * Components
import { Field } from 'components';

// * Constants
import { field } from 'assets/constants';

// * Sass
import './Form.scss';

export const Form = ({ onSubmit, classes, title, buttonText, fields }) =>
  <form
    onSubmit={onSubmit}
    className={classnames('form', classes)}
  >
    {title && <h2 className="form__title">{title}</h2>}
    {fields.map(field => <Field key={field.name} {...field} />)}
    <button
      type="submit"
      className={
        classnames(
          'btn',
          'bordered',
          'primary',
          'filled',
          'form__submitBtn',
          ...classes.map(cl => `${cl}__submitBtn`)
        )
      }
    >
      {buttonText}
    </button>
  </form>

Form.propTypes = {
  classes: arrayOf(string),
  onSubmit: func.isRequired,
  title: string,
  buttonText: string.isRequired,
  fields: arrayOf(field)
};
import React from 'react';
import classnames from 'classnames';
import { arrayOf, func, any, string } from 'prop-types';

// * Sass
import './Form.scss';

export const Form = ({ classes, submit, title, buttonText, children }) =>
  <form
    className={classnames('form', classes)}
    onSubmit={submit}
  >
    { title && <h2 className="form__title">{ title }</h2>}
    {children}
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
      { buttonText }
    </button>
  </form>

Form.propTypes = {
  classes: arrayOf(string),
  submit: func.isRequired,
  title: string,
  buttonText: string.isRequired,
  children: any
}
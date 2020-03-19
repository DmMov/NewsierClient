import React from 'react';
import classnames from 'classnames';
import { arrayOf, func, any } from 'prop-types';

// * Sass
import './Form.scss';

export const Form = ({ classes, submit, title, buttonText, children }) =>
  <form
    className={classnames('form', classes)}
    onSubmit={submit}
  >
    <h2 className="form__title">{ title }</h2>
    {children}
    <button
      type="submit"
      className={classnames('btn', 'bordered', 'primary', 'filled', 'submit-btn')}
    >
      { buttonText }
    </button>
  </form>

Form.propTypes = {
  classes: arrayOf(string),
  submit: func.isRequired,
  title: string.isRequired,
  buttonText: string.isRequired,
  children: any
}
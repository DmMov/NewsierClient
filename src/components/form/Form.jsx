import React from 'react';
import classnames from 'classnames';

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
import React from 'react';
import classnames from 'classnames';

export const Form = ({ classes, submit, title, buttonText, children }) =>
  <form
    className={classnames('form', classes)}
    onSubmit={submit}
  >
    <h1 className="form__title">{title}</h1>
    {children}
    <button
      type="submit"
      className={classnames('btn', 'bordered', 'primary', 'submit-btn')}
    >
      {buttonText}
    </button>
  </form>
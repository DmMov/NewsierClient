import React from 'react';

// * Components
import { Link } from 'components';

// * Sass
import './AuthButtonSet.scss';

export const AuthButtonSet = () =>
  <div className="auth-button-set">
    <Link
      to="/sign-up"
      classes={['btn', 'sign-up-btn']}
      label="реєстрація"
    />
    <Link
      to="/sign-in"
      classes={['btn', 'primary', 'filled', 'bordered', 'sign-in-btn']}
      label="вхід"
    />
  </div>

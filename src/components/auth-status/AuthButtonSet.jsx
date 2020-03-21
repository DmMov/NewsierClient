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
    >
      реєстрація
    </Link>
    <Link
      to="/sign-in"
      classes={['btn', 'primary', 'filled', 'bordered', 'sign-in-btn']}
    >
      вхід
    </Link>
  </div>

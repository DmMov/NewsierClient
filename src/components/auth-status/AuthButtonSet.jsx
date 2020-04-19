import React from 'react';

// * Components
import { Link } from 'components';

// * Sass
import './AuthButtonSet.scss';

export const AuthButtonSet = () =>
  <div className="authButtonSet">
    <Link
      to="/sign-up"
      classes={['btn', 'authButtonSet__signUpBtn']}
    >
      реєстрація
    </Link>
    <Link
      to="/sign-in"
      classes={['btn', 'primary', 'filled', 'bordered', 'authButtonSet__signInBtn']}
    >
      вхід
    </Link>
  </div>
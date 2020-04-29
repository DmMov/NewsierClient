import React from 'react';

// * Components
import { Link } from 'components';

// * Sass
import './AuthNav.scss';

export const AuthNav = () =>
  <nav className="authNav">
    <Link
      to="/sign-up"
      classes={['btn']}
    >
      реєстрація
    </Link>
    <Link
      to="/sign-in"
      classes={['btn', 'primary', 'filled', 'bordered']}
    >
      вхід
    </Link>
  </nav>
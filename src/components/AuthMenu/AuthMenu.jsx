import React from 'react';

// * Components
import { Link } from 'components';

// * Sass
import './AuthMenu.scss';

export const AuthMenu = () =>
  <nav className="authMenu">
    <Link to="/sign-up" classes={['btn']}>
      реєстрація
    </Link>
    <Link to="/sign-in" classes={['btn', 'primary', 'filled', 'bordered']}>
      вхід
    </Link>
  </nav>;
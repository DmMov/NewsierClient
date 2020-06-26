import React from 'react';

// * Components
import { Link } from 'components';

// * Sass
import './AuthMenu.scss';

export const AuthMenu = () =>
  <nav className="authMenu">
    <Link to="/sign-up" classes={['btn']}>
      sign up
    </Link>
    <Link to="/sign-in" classes={['btn', 'primary', 'filled', 'bordered']}>
      sign in
    </Link>
  </nav>;
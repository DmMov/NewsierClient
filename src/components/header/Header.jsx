import React from 'react';

// * Components
import {
  AuthStatusChecker,
  Link
} from 'components';

// * Sass
import './Header.scss';

export const Header = () =>
  <header id="newsier-header">
    <Link
      exact
      to="/"
      classes={['logo']}
      label="newsier"
    />
    <div></div>
    <AuthStatusChecker />
  </header>

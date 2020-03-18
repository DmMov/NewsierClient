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
    <h2>
      <Link
        exact
        to="/"
        classes={['logo']}
        label="newsier"
      />
    </h2>
    <div></div>
    <AuthStatusChecker />
  </header>

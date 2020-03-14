import React from 'react';

// * Components
import { AuthStatusChecker } from 'components';

// * Sass
import './Header.scss';

export const Header = () =>
  <header id="newsier-header">
    <h2 className="logo logo-title">newsier</h2>
    <div></div>
    <AuthStatusChecker />
  </header>

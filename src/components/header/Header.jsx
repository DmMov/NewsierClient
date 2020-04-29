import React from 'react';

// * Components
import {
  Link,
  AuthNav,
  ProfileLink
} from 'components';

// * Sass
import './Header.scss';

export const Header = ({ publisher }) =>
  <header id="newsierHeader">
    <Link
      exact
      to="/"
    >
      <h2 className="logo">
        newsier
      </h2>
    </Link>
    <div></div>
    {!publisher ? <AuthNav /> : <ProfileLink {...publisher}/>}
  </header>

import React from 'react';

// * Components
import {
  Logo,
  AuthNav,
  CabinetLink
} from 'components';

// * Sass
import './Header.scss';

export const Header = ({ publisher }) =>
  <header id="newsierHeader">
    <Logo color="black" />
    {!publisher ? <AuthNav /> : <CabinetLink {...publisher}/>}
  </header>
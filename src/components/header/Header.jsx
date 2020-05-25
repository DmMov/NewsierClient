import React from 'react';

// * Components
import {
  Logo,
  AuthMenu,
  CabinetLink
} from 'components';

// * Sass
import './Header.scss';

export const Header = ({ publisher }) =>
  <header id="newsierHeader">
    <Logo color="black" />
    {!publisher ? <AuthMenu /> : <CabinetLink {...publisher}/>}
  </header>
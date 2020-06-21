import React from 'react';

// * Components
import {
  Logo,
  AuthMenu,
  CabinetLink
} from 'components';

// * Utils
import { isEmpty } from 'utils/helpers';

// * Sass
import './Header.scss';

export const Header = ({ publisher }) =>
  <header id="newsierHeader">
    <Logo color="black" />
    {publisher && !isEmpty(publisher) ? <CabinetLink {...publisher}/> : <AuthMenu />}
  </header>;
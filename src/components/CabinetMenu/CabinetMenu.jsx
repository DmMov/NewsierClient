import React from 'react';

// * Components
import { IconLink } from 'components';

// * Data
import { menuLinks } from './menuLinks';

// * Sass
import './CabinetMenu.scss';

export const CabinetMenu = () =>
  <nav className="cabinetMenu">
    {menuLinks.map(link => <IconLink key={link.to} {...link} />)}
  </nav>;
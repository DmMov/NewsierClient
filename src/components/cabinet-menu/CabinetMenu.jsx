import React from 'react';
import { ListAlt, AccountBox, PostAdd } from "@material-ui/icons";

// * Components
import { IconLink } from 'components';

// * Sass
import './CabinetMenu.scss';

const LINKS = [
  {
    exact: true,
    to: '/cabinet',
    icon: AccountBox,
    text: 'профіль'
  },
  {
    to: '/cabinet/my-publications',
    icon: ListAlt,
    text: 'мої публікації'
  },
  {
    to: '/cabinet/publication-adding',
    icon: PostAdd,
    text: 'створити публікацію'
  }
];

export const CabinetMenu = () =>
  <nav className="cabinetMenu">
    {LINKS.map(link => <IconLink key={link.to} {...link} />)}
  </nav>
import React from 'react';
import { ListAlt } from '@material-ui/icons';

// * Components
import { Link } from 'components';

// * Sass
import './ProfileNav.scss';

export const ProfileNav = () =>
  <nav className="profileNav">
    <Link
      to="/profile"
      classes={['btn', 'profileNav__link']}
    >
      <ListAlt className="icon" />
      <span className="text">мої публікації</span>
    </Link>
  </nav>
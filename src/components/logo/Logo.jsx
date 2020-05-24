import React from 'react';
import { oneOf } from 'prop-types';

// * Components
import { Link } from 'components';

// * Sass
import './Logo.scss';

export const Logo = ({ color }) =>
  <Link
    to="/"
    classes={['logo', color]}
  >
    newsier
  </Link>

Logo.propTypes = {
  color: oneOf(['white', 'black']).isRequired
}
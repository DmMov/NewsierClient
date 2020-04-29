import React from 'react';
import { string } from 'prop-types';

// * Components
import {
  Link,
  ResponsiveImage
} from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './AuthenticatedPanel.scss';

export const AuthenticatedPanel = ({ name, surname, image }) =>
  <Link
    to="/profile"
    classes={['authenticatedPanel']}
  >
    <span className="authenticatedPanel__publisher">{`${name} ${surname}`}</span>
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['authenticatedPanel__imageContainer']}
    />
  </Link>

AuthenticatedPanel.propTypes = {
  name: string.isRequired,
  surname: string.isRequired,
  image: string.isRequired,
};
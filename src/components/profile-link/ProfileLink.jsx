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
import './ProfileLink.scss';

export const ProfileLink = ({ name, surname, image }) =>
  <Link
    to="/profile"
    classes={['profileLink']}
  >
    <span className="profileLink__publisher">{`${name} ${surname}`}</span>
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['profileLink__imageContainer']}
    />
  </Link>

ProfileLink.propTypes = {
  name: string.isRequired,
  surname: string.isRequired,
  image: string.isRequired,
};
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
import './CabinetLink.scss';

export const CabinetLink = ({ name, surname, image }) =>
  <Link to="/cabinet" classes={['cabinetLink']}>
    <span className="cabinetLink__publisher">{`${name} ${surname}`}</span>
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['cabinetLink__imageContainer']}
    />
  </Link>;

CabinetLink.propTypes = {
  name: string.isRequired,
  surname: string.isRequired,
  image: string.isRequired,
};
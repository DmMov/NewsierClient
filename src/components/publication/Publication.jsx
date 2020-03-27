import React from 'react';

// * Components
import {
  ResponsiveImage,
  PublicationDetails
} from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './Publication.scss';

export const Publication = ({ image, ...props }) =>
  <div className="publication">
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['publication__imageContainer']}
    />
    <PublicationDetails {...props} />
  </div>

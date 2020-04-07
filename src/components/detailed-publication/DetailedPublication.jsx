import React from 'react';

// * Components
import {
  ResponsiveImage
} from 'components';

// * Constants
import { assets } from 'assets/constants';

export const DetailedPublication = ({ image }) =>
  <div className="detailedPublication">
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['detailedPublication__imageContainer']}
    />
  </div>

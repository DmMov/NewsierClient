import React from 'react';
import { string, number } from 'prop-types';

// * Components
import { Slide, ResponsiveImage, PublicationDetails } from 'components';
import { IndexBox } from './IndexBox';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './PublicationSlide.scss';

export const PublicationSlide = ({ image, index, ...props }) =>
  <Slide className="publicationSlide">
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['publicationSlide__imageContainer', 'withOverlay']}
    />
    <IndexBox index={index + 1} />
    <PublicationDetails {...props} />
  </Slide>;

PublicationSlide.propTypes = {
  image: string.isRequired,
  index: number.isRequired
};

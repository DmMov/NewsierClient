import React from 'react';
import { object, number } from 'prop-types';

// * Components
import { IndexBox } from './IndexBox';
import {
  ResponsiveImage,
  PublicationDetails
} from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './Slide.scss';

export const Slide = ({ slide, index }) =>
  <div className="slide">
    <ResponsiveImage
      src={`${assets}/images/${slide.image}`}
      classes={['slide__imageContainer']}
    />
    <IndexBox index={index} />
    <PublicationDetails {...slide} />
  </div>

Slide.propTypes = {
  slide: object.isRequired,
  index: number.isRequired
}
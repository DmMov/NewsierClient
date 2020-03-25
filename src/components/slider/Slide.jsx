import React from 'react';
import { object, number } from 'prop-types';

// * Components
import { IndexBox } from './IndexBox';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './Slide.scss';
import { ResponsiveImage } from '../responsive-image/ResponsiveImage';

export const Slide = ({ slide, index }) =>
  <div className="slide">
    <ResponsiveImage
      src={`${assets}/images/${slide.image}`}
      classes={['slide__imageContainer']}
    />
    <IndexBox index={index} />
  </div>

Slide.propTypes = {
  slide: object.isRequired,
  index: number.isRequired
}
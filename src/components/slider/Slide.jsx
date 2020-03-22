import React from 'react';
import { object, number } from 'prop-types';

import { assets } from 'assets/constants';

// * Sass
import './Slide.scss';

export const Slide = ({ slide, index }) =>
  <div className="slide">
    <div className="image-wrap">
      <img src={`${assets}/images/${slide.image}`} className="slide-img" />
    </div>
  </div>

Slide.propTypes = {
  slide: object.isRequired,
  index: number.isRequired
}
import React from 'react';
import { object, number } from 'prop-types';

// * Components
import { IndexBox } from './IndexBox';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './Slide.scss';

export const Slide = ({ slide, index }) =>
  <div className="slide">
    <div className="image-wrap slide__image-wrap">
      <img src={`${assets}/images/${slide.image}`} className="slide__image" />
    </div>
    <IndexBox index={index} />
  </div>

Slide.propTypes = {
  slide: object.isRequired,
  index: number.isRequired
}
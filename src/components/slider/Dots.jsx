import React from 'react';
import { array, number, func } from 'prop-types';

// * Components
import { Dot } from './Dot';

// * Sass
import './Dots.scss';

export const Dots = ({ dots, jumpTo, activeIndex }) =>
  <div className="dots">
    { dots.map((_, i) => <Dot key={i} index={i} jumpTo={() => jumpTo(i)} isActive={i == activeIndex && true} />) }
  </div>

Dots.propTypes = {
  dots: array.isRequired,
  jumpTo: func.isRequired,
  activeIndex: number.isRequired
}
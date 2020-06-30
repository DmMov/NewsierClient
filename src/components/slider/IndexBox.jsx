import React from 'react';
import { number } from 'prop-types';

// * Sass
import './IndexBox.scss';

export const IndexBox = ({ index }) =>
  <div className="index-box">
    <div className="index-box__square digit">
      {index}
    </div>
    <span className="index-box__dash">
      —
    </span>
    <span className="index-box__text">
      featured
    </span>
  </div>

IndexBox.propTypes = {
  index: number.isRequired
};
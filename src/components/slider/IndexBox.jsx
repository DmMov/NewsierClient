import React from 'react';

// * Sass
import './IndexBox.scss';

export const IndexBox = ({ index }) =>
  <div className="index-box">
    <div className="index-box__square">
      { index + 1 }
    </div>
    <span className="index-box__dash">
      —
    </span>
    <span className="index-box__text">
      популярні
    </span>
  </div>
import React from 'react';
import { number } from 'prop-types';

// * Sass
import './IndexBox.scss';

export const IndexBox = ({ index }) =>
  <div className="indexBox">
    <span className="indexBox__index digit">{index}</span>
    <span className="indexBox__featured">featured</span>
  </div>;

IndexBox.propTypes = {
  index: number.isRequired
};
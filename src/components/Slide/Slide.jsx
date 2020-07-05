import React from 'react';
import { string, any } from 'prop-types';
import classnames from 'classnames';

// * Sass
import './Slide.scss';

export const Slide = ({ className, children }) =>
  <div className={classnames('slide', className)}>
    {children}
  </div>;

Slide.propTypes = {
  className: string,
  children: any
};
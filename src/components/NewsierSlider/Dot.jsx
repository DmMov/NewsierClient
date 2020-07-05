import React from 'react';
import { bool, func } from 'prop-types';
import classnames from 'classnames';

// * Sass
import './Dot.scss';

export const Dot = ({ jumpTo, isActive }) =>
  <button onClick={jumpTo} className={classnames('dot', isActive && 'active')} />;

Dot.propTypes = {
  jumpTo: func.isRequired,
  isActive: bool.isRequired
};
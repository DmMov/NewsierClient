import React from 'react';
import { bool, func } from 'prop-types';
import { FiberManualRecord } from '@material-ui/icons';
import classnames from 'classnames';

// * Sass
import './Dot.scss';

export const Dot = ({ jumpTo, isActive }) =>
  <button onClick={jumpTo} className={classnames('dot', isActive && 'active')}>
    <FiberManualRecord className="dot__icon"/>
  </button>

Dot.propTypes = {
  jumpTo: func.isRequired,
  isActive: bool.isRequired
}
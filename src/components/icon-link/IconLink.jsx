import React from 'react';
import { string, arrayOf, any } from 'prop-types';

// * Components
import { Link } from 'components';

// * Sass
import "./IconLink.scss";

export const IconLink = ({ classes, icon: Icon, text, ...props }) =>
  <Link
    {...props}
    classes={['btn', 'iconLink', classes]}
  >
    <Icon className="iconLink__icon" />
    <span className="iconLink__text">{text}</span>
  </Link>

IconLink.propTypes = {
  classes: arrayOf(string),
  icon: any.isRequired,
  text: string.isRequired
};
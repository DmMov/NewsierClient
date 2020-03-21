import React from 'react';
import { string, func } from 'prop-types';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './AuthenticatedPanel.scss';

export const AuthenticatedPanel = ({ image, signOut }) =>
  <div id="authenticated-panel">
    <div className="image-wrap publisher-image-wrap">
      <img src={`${assets}/images/${image}`} alt=""/>
    </div>
    <button className="btn red" onClick={signOut}>Вийти</button>
  </div>

AuthenticatedPanel.propTypes = {
  image: string.isRequired,
  signOut: func.isRequired
}
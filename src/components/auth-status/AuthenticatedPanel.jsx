import React from 'react';
import { string, func } from 'prop-types';

// * Components
import { ResponsiveImage } from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './AuthenticatedPanel.scss';

export const AuthenticatedPanel = ({ image, signOut }) =>
  <div className="authenticatedPanel">
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['authenticatedPanel__imageContainer']}
    />
    <button className="btn authenticatedPanel__signOutBtn" onClick={signOut}>Вийти</button>
  </div>

AuthenticatedPanel.propTypes = {
  image: string.isRequired,
  signOut: func.isRequired
}
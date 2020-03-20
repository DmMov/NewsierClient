import React from 'react';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './AuthenticatedPanel.scss';

export const AuthenticatedPanel = ({ publisher, signOut }) =>
  <div id="authenticated-panel">
    <span className="publisher-name">
      { publisher.name }
    </span>
    <div className="image-wrap publisher-image-wrap">
      <img src={`${assets}/images/${publisher.image}`} alt=""/>
    </div>
    <button className="btn red" onClick={signOut}>Вийти</button>
  </div>

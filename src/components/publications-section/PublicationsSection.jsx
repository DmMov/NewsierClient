import React from 'react';

// * Components
import { PublicationCardList } from 'components';

// * Sass
import './PublicationsSection.scss';

export const PublicationsSection = ({ ...props }) =>
  <div className="publicationsSection">
    <h2 className="publicationsSection__title">публікації</h2>
    <PublicationCardList {...props} />
  </div>
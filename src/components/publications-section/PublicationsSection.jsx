import React from 'react';

// * Components
import { PublicationList } from 'components';

// * Sass
import './PublicationsSection.scss';

export const PublicationsSection = ({ ...props }) =>
  <div className="publicationsSection">
    <h2 className="publicationsSection__title">публікації</h2>
    <PublicationList {...props} />
  </div>
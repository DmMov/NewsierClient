import React from 'react';

// * Sass
import './PublicationsSection.scss';
import { PublicationList } from 'components';

export const PublicationsSection = ({ ...props }) =>
  <div className="publicationsSection">
    <PublicationList {...props} />
  </div>

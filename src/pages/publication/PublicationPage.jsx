import React from 'react';

// * Components
import {
  DetailedPublicationModule,
  CommentsSectionModule
} from 'components';

// * Sass
import './PublicationPage.scss';

export const PublicationPage = () =>
  <div className="publicationPage page">
    <DetailedPublicationModule />
    <CommentsSectionModule />
  </div>
import React from 'react';

// * Components
import {
  DetailedPublicationModule,
  CommentsSectionModule
} from 'components';

// * Sass
import './PublicationPage.scss';

const PublicationPage = () =>
  <div className="publicationPage page">
    <DetailedPublicationModule />
    <CommentsSectionModule />
  </div>

export default PublicationPage;
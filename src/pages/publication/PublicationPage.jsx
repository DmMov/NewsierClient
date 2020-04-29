import React from 'react';

// * Components
import {
  PublicationModule,
  CommentsSectionModule
} from 'components';

// * Sass
import './PublicationPage.scss';

const PublicationPage = () =>
  <div className="publicationPage page">
    <PublicationModule />
    <CommentsSectionModule />
  </div>

export default PublicationPage;
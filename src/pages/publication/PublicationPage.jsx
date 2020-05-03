import React from 'react';

// * Components
import {
  BackButton,
  PublicationModule,
  CommentAdding,
  Comments
} from 'components';

// * Sass
import './PublicationPage.scss';

const PublicationPage = () =>
  <div className="publicationPage page">
    <BackButton />
    <PublicationModule />
    <div className="publicationPage__commentsSection">
      <h2 className="title">коментарі</h2>
      <CommentAdding />
      <Comments />
    </div>
  </div>

export default PublicationPage;
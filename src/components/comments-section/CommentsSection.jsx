import React from 'react';

// * Components
import {
  CommentAddingModule,
  CommentList
} from 'components';

// * Sass
import './CommentsSection.scss';

export const CommentsSection = ({ authenticated, comments }) =>
  <div className="commentsSection">
    <h3 className="commentsSection__title">коментарі</h3>
    {authenticated && <CommentAddingModule />}
    <CommentList comments={comments}  />
  </div>
import React from 'react';

// * Components
import {
  CommentAddingModule,
  CommentList
} from 'components';

// * Sass
import './CommentsSection.scss';

export const CommentsSection = ({ comments, refreshComments, authenticated }) =>
  <div className="commentsSection">
    <h3 className="commentsSection__title">коментарі</h3>
    {authenticated && <CommentAddingModule refreshComments={refreshComments} />}
    <CommentList comments={comments} />
  </div>
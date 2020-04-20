import React from 'react';

// * Components
import {
  CommentAddingModule,
  CommentList
} from 'components';

// * Sass
import './CommentsSection.scss';

export const CommentsSection = ({ refreshComments, authenticated, ...props }) =>
  <div className="commentsSection">
    <h3 className="commentsSection__title">коментарі</h3>
    {authenticated && <CommentAddingModule refreshComments={refreshComments} />}
    <CommentList {...props}  />
  </div>
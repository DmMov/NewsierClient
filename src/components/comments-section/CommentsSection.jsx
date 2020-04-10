import React from 'react';

// * Components
import {
  CommentAddingModule,
  CommentsBox
} from 'components';

// * Sass
import './CommentsSection.scss';

export const CommentsSection = ({ ...props }) =>
  <div className="commentsSection">
    <CommentAddingModule {...props} />
    <CommentsBox {...props} />
  </div>
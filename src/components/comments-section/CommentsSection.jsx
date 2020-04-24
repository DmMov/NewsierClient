import React from 'react';
import { bool, arrayOf } from 'prop-types';

// * Components
import {
  CommentAddingModule,
  CommentList
} from 'components';

// * Constants
import { comment } from 'assets/constants';

// * Sass
import './CommentsSection.scss';

export const CommentsSection = ({ authenticated, comments }) =>
  <div className="commentsSection">
    <h3 className="commentsSection__title">коментарі</h3>
    {authenticated && <CommentAddingModule />}
    <CommentList comments={comments}  />
  </div>

CommentsSection.propTypes = {
  authenticated: bool.isRequired,
  comments: arrayOf(comment)
};
import React from 'react';
import { arrayOf } from 'prop-types';

// * Components
import { CommentModule } from 'components';

// * Constants
import { comment } from 'assets/constants';

// * Sass
import './CommentList.scss';

export const CommentList = ({ comments }) =>
  <div className="commentList">
    {
      !!comments && comments.length != 0 ?
        comments.map(comment => <CommentModule key={comment.id} comment={comment} />) :
        <span className="commentList__noComments">публікація, поки що, не містить коментарів.</span>
    }
  </div>

CommentList.propTypes = {
  comments: arrayOf(comment)
};
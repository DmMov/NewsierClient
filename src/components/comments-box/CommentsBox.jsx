import React from 'react';

// * Components
import { Comment } from './Comment';

// * Sass
import './CommentsBox.scss';

export const CommentsBox = ({ comments }) =>
  <div className="commentsBox">
    <h3 className="commentsBox__title">коментірі</h3>
    {
      !!!comments || comments.length == 0 &&
        <span className="commentsBox__noComments">публікація, поки що, не містить коментарів</span>
    }
    {
      !!comments && comments.length != 0 &&
        comments.map(comment => <Comment key={comment.id} {...comment} />)
    }
  </div>

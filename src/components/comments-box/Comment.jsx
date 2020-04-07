import React from 'react';

// * Sass
import './Comment.scss';

export const Comment = ({ value, comments }) =>
  <div className="comment">
    <span className="comment__value">{value}</span>
    <div className="comment__innerComments">
      {
        !!comments && comments.length != 0 &&
          comments.map(comment => <Comment key={comment.id} {...comment} />)
      }
    </div>
  </div>
import React from 'react';

// * Components
import { CommentModule } from 'components';

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
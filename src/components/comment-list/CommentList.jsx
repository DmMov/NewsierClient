import React from 'react';

// * Components
import { CommentModule } from 'components';

// * Sass
import './CommentList.scss';

export const CommentList = ({ comments, replyToComment }) =>
  <div className="commentList">
    {
      !!comments && comments.length != 0 ?
        comments.map(comment => <CommentModule key={comment.id} replyToComment={replyToComment} comment={comment} />) :
        <span className="commentList__noComments">публікація, поки що, не містить коментарів</span>
    }
  </div>
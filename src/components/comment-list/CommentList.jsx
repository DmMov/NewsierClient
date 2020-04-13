import React from 'react';

// * Components
import { Comment } from 'components';

// * Sass
import './CommentList.scss';

export const CommentList = ({ comments, reply }) =>
  <div className="commentList">
    {
      !!comments && comments.length != 0 ?
        comments.map(comment => <Comment key={comment.id} reply={reply} {...comment} />) :
        <span className="commentList__noComments">публікація, поки що, не містить коментарів</span>
    }
  </div>
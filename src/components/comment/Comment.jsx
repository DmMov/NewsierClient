import React from 'react';
import classnames from 'classnames';

// * Components
import {
  PublisherBox,
  CommentModule
} from 'components';

// * Sass
import './Comment.scss';

export const Comment = ({ id, value, comments, authenticated, replyToComment, canDelete, onDelete, fetchComments, ...props }) =>
  <div className="comment">
    <PublisherBox {...props} />
    <span className="comment__value">{value}</span>
    {authenticated && <button className="comment__replyBtn" onClick={replyToComment}>відповісти</button>}
    <div className={classnames('comment__innerComments', !!!comments || comments.length == 0 ? 'none' : false)}>
      <h5 className="innerComments__title">відповіді</h5>
      {
        !!comments && comments.length != 0 &&
          comments.map(comment => <CommentModule key={comment.id} comment={comment} fetchComments={fetchComments} />)
      }
    </div>
    {canDelete && <button className="comment__deleteBtn" onClick={onDelete}>+</button>}
  </div>
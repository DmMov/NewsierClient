import React from 'react';
import { string, arrayOf, bool, func } from 'prop-types';
import classnames from 'classnames';

// * Components
import {
  PublisherBox,
  CommentModule
} from 'components';

// * Constants
import { comment } from 'assets/constants';

// * Sass
import './Comment.scss';

export const Comment = ({ id, value, comments, authenticated, onReply, canDelete, onDelete, ...props }) =>
  <div className="comment">
    <PublisherBox {...props} />
    <span className="comment__value">{value}</span>
    {authenticated && <button className="comment__replyBtn" onClick={onReply}>відповісти</button>}
    <div className={classnames('comment__innerComments', !!!comments || comments.length == 0 ? 'none' : false)}>
      <h5 className="innerComments__title">відповіді</h5>
      {
        !!comments && comments.length != 0 &&
          comments.map(comment => <CommentModule key={comment.id} comment={comment} />)
      }
    </div>
    {canDelete && <button className="comment__deleteBtn" type="button" onClick={onDelete}>+</button>}
  </div>

Comment.propTypes = {
  id: string.isRequired,
  value: string.isRequired,
  comments: arrayOf(comment),
  authenticated: bool.isRequired,
  onReply: func.isRequired,
  canDelete: bool.isRequired,
  onDelete: func.isRequired
};
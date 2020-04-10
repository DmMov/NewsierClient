import React from 'react';
import classnames from 'classnames';

// * Components
import { PublisherBox } from 'components';

// * Sass
import './Comment.scss';

export const Comment = ({ id, value, comments, reply, ...props }) =>
  <div className="comment">
    <PublisherBox {...props} />
    <span className="comment__value">{value}</span>
    <button className="comment__replyBtn" onClick={() => reply(id)}>відповісти</button>
    <div className={classnames('comment__innerComments', !!!comments || comments.length == 0 ? 'none' : false)}>
      {
        !!comments && comments.length != 0 &&
          comments.map(comment => <Comment key={comment.id} reply={reply} {...comment} />)
      }
    </div>
  </div>
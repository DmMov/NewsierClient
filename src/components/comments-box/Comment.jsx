import React from 'react';
import classnames from 'classnames';

// * Components
import { PublisherBox } from 'components';

// * Sass
import './Comment.scss';

export const Comment = ({ value, comments, ...props }) =>
  <div className="comment">
    <PublisherBox {...props} />
    <span className="comment__value">{value}</span>
    <div className={classnames('comment__innerComments', !!!comments || comments.length == 0 ? 'none' : false)}>
      {
        !!comments && comments.length != 0 &&
          comments.map(comment => <Comment key={comment.id} {...comment} />)
      }
    </div>
  </div>
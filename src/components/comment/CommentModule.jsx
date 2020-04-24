import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// * Components
import { Comment } from './Comment';

// * Constants
import { comment } from 'assets/constants';

// * Actions
import {
  replyToComment,
  deleteComment
} from 'store/actions';

// * Selectors
import {
  selectAuthStatus,
  selectPublisher
} from 'utils/selectors';

export const CommentModule = ({ comment }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthStatus);
  const publisher = useSelector(selectPublisher);
  const { publicationId } = useParams();

  const onReply = () => dispatch(replyToComment(comment.id));

  const onDelete = () => dispatch(deleteComment(comment.id, publicationId));

  return <Comment
    authenticated={authenticated}
    onReply={onReply}
    canDelete={!!publisher && publisher.role == 'admin' || !!publisher && publisher.id == comment.publisherId}
    onDelete={onDelete}
    {...comment}
  />
}

CommentModule.propTypes = {
  comment: comment
};
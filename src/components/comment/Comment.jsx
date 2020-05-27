import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// * Components
import { CommentCard } from './CommentCard';

// * Constants
import { comment } from 'assets/constants';

// * Actions
import { deleteComment } from 'store/actions';

// * Selectors
import { selectAuthStatus } from 'utils/selectors';

export const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthStatus);
  const { publicationId } = useParams();

  const onCommentDelete = () => dispatch(deleteComment(comment.id, publicationId));

  return <CommentCard
    authenticated={authenticated}
    onDelete={onCommentDelete}
    {...comment}
  />
}

Comment.propTypes = {
  comment: comment
};
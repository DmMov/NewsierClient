import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// * Components
import { Comment } from './Comment';

// * Actions
import { setReplyAim } from 'store/actions';

// * Helpers
import {
  getRequest,
  deleteRequest
} from 'utils/helpers';

// * Selectors
import {
  selectAuthStatus,
  selectPublisher
} from 'utils/selectors';

export const CommentModule = ({ comment, fetchComments }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthStatus);
  const publisher = useSelector(selectPublisher);

  const replyToComment = async () => {
    const response = await getRequest(`/comments/${comment.id}`);

    if (response.status == 200)
      dispatch(setReplyAim(response.data));
  }

  const onDelete = async () => {
    const response = await deleteRequest(`/comments/${comment.id}`);

    if (response.status == 204)
      await fetchComments();
  }

  return <Comment
    authenticated={authenticated}
    replyToComment={replyToComment}
    canDelete={!!publisher && publisher.role == 'admin' || !!publisher && publisher.id == comment.publisherId}
    onDelete={onDelete}
    fetchComments={fetchComments}
    {...comment}
  />
}
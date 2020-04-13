import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// * Components
import { Comment } from './Comment';

// * Actions
import { setReplyAim } from 'store/actions';

// * Helpers
import { getRequest } from 'utils/helpers';

// * Selectors
import { selectAuthStatus } from 'utils/selectors';

export const CommentModule = ({ comment }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthStatus);

  const replyToComment = async () => {
    const response = await getRequest(`/comments/${comment.id}`);

    if (response.status == 200)
      dispatch(setReplyAim(response.data));
  }

  return <Comment
    authenticated={authenticated}
    replyToComment={replyToComment}
    {...comment}
  />
}
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// * Components
import { CommentList } from './CommentList';
import { CommentsUnavailable } from './CommentsUnavailable';

// * Selectors
import {
  selectComments,
  selectAuthStatus
} from 'utils/selectors';

// * Actions
import {
  getComments,
  setComments,
  deleteComment
} from 'store/actions';

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const authenticated = useSelector(selectAuthStatus);
  const { publicationId } = useParams();

  useEffect(() => {
    if (authenticated)
      dispatch(getComments(publicationId));
    return () => {
      dispatch(setComments(null));
    }
  }, []);

  const onCommentDelete = id =>
    dispatch(deleteComment(id, publicationId));

  return authenticated ?
    <CommentList comments={comments} onCommentDelete={onCommentDelete}/> :
    <CommentsUnavailable />;
}
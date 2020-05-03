import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// * Components
import { CommentList } from './CommentList';

// * Selectors
import {
  selectComments,
  selectAuthStatus
} from 'utils/selectors';

// * Actions
import {
  getComments,
  setComments
} from 'store/actions';
import { CommentsUnavailable } from './CommentsUnavailable';

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

  return authenticated ? <CommentList comments={comments} /> : <CommentsUnavailable />
}
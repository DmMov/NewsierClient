import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// * Components
import { CommentsSection } from './CommentsSection';

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

export const CommentsSectionModule = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const authenticated = useSelector(selectAuthStatus);
  const { publicationId } = useParams();

  useEffect(() => {
    dispatch(getComments(publicationId));
    return () => {
      dispatch(setComments(null));
    }
  }, []);

  return <CommentsSection
    comments={comments}
    authenticated={authenticated}
  />
}
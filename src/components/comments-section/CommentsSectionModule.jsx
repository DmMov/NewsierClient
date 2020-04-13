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

// * Helpers
import { getRequest } from 'utils/helpers';

// * Actions
import { setComments } from 'store/actions';

export const CommentsSectionModule = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const authenticated = useSelector(selectAuthStatus);
  const { publicationId } = useParams();

  useEffect(() => {
    fetchComments();
    return () => {
      dispatch(setComments(null));
    }
  }, []);

  const fetchComments = async () => {
    const response = await getRequest(`/comments/by-publication/${publicationId}`);

    if (response.status == 200)
      dispatch(setComments(response.data));
  }

  return <CommentsSection
    comments={comments}
    refreshComments={fetchComments}
    authenticated={authenticated}
  />
}
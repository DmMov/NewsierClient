import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// * Components
import { CommentsSection } from './CommentsSection';

// * Selectors
import { selectComments } from 'utils/selectors';

// * Helpers
import { getRequest } from 'utils/helpers';

// * Actions
import { setComments } from 'store/actions';

export const CommentsSectionModule = () => {
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();
  const [commentToReply, setCommentToReply] = useState(null);
  const { publicationId } = useParams();

  useEffect(() => {
    fetchComments();
    return () => {
      dispatch(setComments(null));
    }
  }, []);

  const fetchComments = async () => {
    const response = await getRequest(`/comments/by-publication/${publicationId}`);

    if (response.status == 200) {
      dispatch(setComments(response.data));
    }
  }

  const reply = async id => {
    const response = await getRequest(`/comments/${id}`);

    if (response.status == 200) {
      setCommentToReply(() => response.data);
    }
  }

  return <CommentsSection
    comments={comments}
    publicationId={publicationId}
    refreshComments={fetchComments}
    commentToReply={commentToReply}
    cancel={() => setCommentToReply(null)}
    reply={reply}
  />
}
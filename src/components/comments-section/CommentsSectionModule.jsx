import React, { useState, useEffect } from 'react';

// * Components
import { CommentsSection } from './CommentsSection';

// * Helpers
import { getRequest } from 'utils/helpers';

export const CommentsSectionModule = ({ publicationId }) => {
  const [comments, setComments] = useState(null);
  const [commentToReply, setCommentToReply] = useState(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await getRequest(`/comments/by-publication/${publicationId}`);

    if (response.status == 200) {
      setComments(() => response.data)
    }
  }

  const reply = async id => {
    const response = await getRequest(`/comments/${id}`);

    if (response.status == 200) {
      setCommentToReply(() => response.data)
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
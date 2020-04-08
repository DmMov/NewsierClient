import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// * Components
import {
  DetailedPublication,
  CommentsBox,
  CommentAddingModule
} from 'components';

// * Helpers
import { getRequest } from 'utils/helpers';

// * Sass
import './PublicationPage.scss';

export const PublicationPage = () => {
  const [publication, setPublication] = useState(null);
  const [comments, setComments] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPublication();
    fetchComments();
  }, []);

  const fetchPublication = async () => {
    const response = await getRequest(`/publications/${id}`);

    if (response.status == 200) {
      setPublication(() => response.data)
    }
  }

  const fetchComments = async () => {
    const response = await getRequest(`/comments/by-publication/${id}`);

    if (response.status == 200) {
      setComments(() => response.data)
    }
  }

  return (
    <div className="publicationPage page">
      <DetailedPublication {...publication} />
      <h3 className="publicationPage__subTitle">коментарі</h3>
      <CommentAddingModule publicationId={id} refreshComments={fetchComments} />
      <CommentsBox comments={!!comments && comments} />
    </div>
  );
}
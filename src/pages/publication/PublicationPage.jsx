import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// * Components
import {
  BackButton,
  Publication,
  CommentAdding,
  Comments
} from 'components';

// * Helpers
import { getRequest } from 'utils/helpers';

// * Sass
import './PublicationPage.scss';

const PublicationPage = () => {
  const [publication, setPublication] = useState(null);
  const { publicationId } = useParams();

  useEffect(() => {
    fetchPublication();
  }, [])

  const fetchPublication = async () => {
    const response = await getRequest(`/publications/${publicationId}`);

    if (response.status == 200)
      setPublication(response.data);
    else
      setPublication({});
  }

  return (
    <div className="publicationPage page">
      <BackButton />
      {!!publication && <Publication {...publication} />}
      <h2 className="publicationPage__commentsTitle">коментарі</h2>
      <CommentAdding />
      <Comments />
    </div>
  );
}

export default PublicationPage;
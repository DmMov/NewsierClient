import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDocumentTitle from '@rehooks/document-title';

// * Components
import {
  BackButton,
  Publication,
  CommentAdding,
  Comments,
  Spinner
} from 'components';

// * Helpers
import { getRequest, isEmpty } from 'utils/helpers';

// * Sass
import './PublicationPage.scss';

const PublicationPage = () => {
  const [publication, setPublication] = useState(null);
  const { publicationId } = useParams();
  useDocumentTitle(`Newsier | ${!!publication ? publication.title : 'Завантаження...'}`);

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
      {
        !!publication ?
          isEmpty(publication) ?
            <p className="publicationPage__error">помилка, публікація не знайдена.</p> :
            <Publication {...publication} /> :
          <Spinner />
      }
      <h2 className="publicationPage__commentsTitle">коментарі</h2>
      <CommentAdding />
      <Comments />
    </div>
  );
}

export default PublicationPage;
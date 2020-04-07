import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// * Components
import {
  DetailedPublication
} from 'components';

// * Helpers
import { getRequest } from 'utils/helpers';

// * Sass
import './PublicationPage.scss';
import { CommentsBox } from '../../components';

export const PublicationPage = () => {
  const [publication, setPublication] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPublication();
  }, []);

  const fetchPublication = async () => {
    const response = await getRequest(`/publications/${id}`);

    if (response.status == 200) {
      setPublication(() => response.data)
    }
  }

  return (
    <div id="publicationPage" className="page">
      <DetailedPublication {...publication} />
      <CommentsBox {...publication} />
    </div>
  );
}
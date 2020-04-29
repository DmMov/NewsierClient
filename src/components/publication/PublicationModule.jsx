import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// * Components
import { Publication } from './Publication';

// * Helpers
import { getRequest } from 'utils/helpers';

export const PublicationModule = () => {
  const [publication, setPublication] = useState(null);
  const { publicationId } = useParams();

  useEffect(() => {
    fetchPublication();
  }, [])

  const fetchPublication = async () => {
    const response = await getRequest(`/publications/${publicationId}`);

    if (response.status == 200)
      setPublication(() => response.data);
  }

  return !!publication && <Publication {...publication} />;
}
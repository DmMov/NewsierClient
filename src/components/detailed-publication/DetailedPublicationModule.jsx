import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// * Components
import { DetailedPublication } from './DetailedPublication';

// * Helpers
import { getRequest } from 'utils/helpers';

export const DetailedPublicationModule = () => {
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

  return !!publication ? <DetailedPublication {...publication} /> : <div className="publicationPlaceholder"></div>
}

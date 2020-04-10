import React, { useEffect, useState } from 'react';

// * Components
import { DetailedPublication } from './DetailedPublication';

// * Helpers
import { getRequest } from 'utils/helpers';

export const DetailedPublicationModule = ({ publicationId }) => {
  const [publication, setPublication] = useState(null);

  useEffect(() => {
    fetchPublication();
  }, [])

  const fetchPublication = async () => {
    const response = await getRequest(`/publications/${publicationId}`);

    if (response.status == 200) {
      setPublication(() => response.data)
    }
  }

  return !!publication ? <DetailedPublication {...publication} /> : <div className="publicationPlaceholder"></div>
}

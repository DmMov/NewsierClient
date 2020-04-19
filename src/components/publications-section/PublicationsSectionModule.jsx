import React, { useState, useEffect } from 'react';

// * Components
import { PublicationsSection } from './PublicationsSection';

// * Helpers
import { getRequest } from 'utils/helpers';

export const PublicationsSectionModule = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    const response = await getRequest('/publications');

    if (response.status == 200)
      setPublications(() => response.data)
  }

  return <PublicationsSection publications={publications} />
}
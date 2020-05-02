import React from 'react';

// * Components
import {
  Publications,
  PublicationCard
} from 'components';

// * Sass
import './PublisherPublicationsPage.scss';

const PublisherPublicationsPage = () =>
  <div className="publisherPublicationsPage page">
    <Publications
      url="/publications"
      component={PublicationCard}
    />
  </div>

export default PublisherPublicationsPage;
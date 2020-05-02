import React from 'react';

// * Components
import {
  Publications,
  PublicationItem
} from 'components';

// * Sass
import './PublisherPublicationsPage.scss';

const PublisherPublicationsPage = () =>
  <div className="publisherPublicationsPage page">
    <Publications
      url="/publications/by-publisher"
      component={PublicationItem}
    />
  </div>

export default PublisherPublicationsPage;
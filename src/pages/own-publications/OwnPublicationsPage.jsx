import React from 'react';

// * Components
import {
  Publications,
  PublicationItem
} from 'components';

// * Sass
import './OwnPublicationsPage.scss';

const OwnPublicationsPage = () =>
  <div className="ownPublicationsPage page">
    <Publications
      url="/publications/by-publisher"
      component={PublicationItem}
    />
  </div>

export default OwnPublicationsPage;
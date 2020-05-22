import React from 'react';

// * Components
import {
  Publications,
  PublicationItem,
  Link
} from 'components';

// * Sass
import './OwnPublicationsPage.scss';

const OwnPublicationsPage = () =>
  <div className="ownPublicationsPage page">
    <Link
      to="/profile/publication-adding"
      classes={['btn', 'primary', 'filled', 'bordered', 'ownPublicationsPage__addingBtn']}
    >
      створити публікацію
    </Link>
    <Publications
      url="/publications/by-publisher"
      component={PublicationItem}
    />
  </div>

export default OwnPublicationsPage;
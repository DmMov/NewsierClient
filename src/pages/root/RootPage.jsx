import React from 'react';
import useDocumentTitle from '@rehooks/document-title';

// * Components
import {
  Slider,
  Publications,
  PublicationCard,
  SponsorsSection
} from 'components';

import './RootPage.scss';

const RootPage = () => {
  useDocumentTitle('Newsier | Головна');

  return <div className="rootPage page">
    <Slider />
    <div className="rootPage__publicationsSection">
      <h2 className="sectionTitle">публікації</h2>
      <Publications
        url="/publications"
        component={PublicationCard}
      />
    </div>
    <SponsorsSection />
  </div>;
}

export default RootPage;
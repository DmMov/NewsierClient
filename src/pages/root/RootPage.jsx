import React from 'react';
import useDocumentTitle from '@rehooks/document-title';

// * Components
import { Slider, Publications } from 'components';

import './RootPage.scss';

const RootPage = () => {
  useDocumentTitle('Newsier | Home');

  return <div className="rootPage page">
    <Slider />
    <div className="rootPage__publicationsSection">
      <h2 className="sectionTitle">publications</h2>
      <Publications url="/publications" />
    </div>
  </div>;
}

export default RootPage;
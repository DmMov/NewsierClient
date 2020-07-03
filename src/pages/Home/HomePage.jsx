import React from 'react';
import useDocumentTitle from '@rehooks/document-title';

// * Components
import { Slider, Publications } from 'components';

import './HomePage.scss';

const HomePage = () => {
  useDocumentTitle('Newsier | Home');

  return <div className="homePage page">
    <Slider />
    <div className="homePage__publicationsSection">
      <h2 className="sectionTitle">publications</h2>
      <Publications url="/publications" />
    </div>
  </div>;
}

export default HomePage;
import React from 'react';
import useDocumentTitle from '@rehooks/document-title';

// * Components
import {
  SliderModule,
  Publications,
  PublicationCard
} from 'components';

import './MainPage.scss';

const MainPage = () => {
  useDocumentTitle('Newsier | Головна');

  return (
    <div className="mainPage page">
      <SliderModule />
      <div className="mainPage__publicationsSection">
        <h2 className="sectionTitle">публікації</h2>
        <Publications
          url="/publications"
          component={PublicationCard}
        />
      </div>
    </div>
  );
}

export default MainPage;
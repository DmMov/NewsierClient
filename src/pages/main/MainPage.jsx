import React from 'react';

// * Components
import {
  SliderModule,
  Publications,
  PublicationCard
} from 'components';

import './MainPage.scss';

const MainPage = () =>
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

export default MainPage;
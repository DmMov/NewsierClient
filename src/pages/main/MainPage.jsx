import React from 'react';

// * Components
import {
  SliderModule,
  Publications
} from 'components';

const MainPage = () =>
  <div id="mainPage" className="page">
    <SliderModule />
    <h2 className="sectionTitle">публікації</h2>
    <Publications url="/publications" mode="cards" />
  </div>

export default MainPage;
import React, { useEffect, useState } from 'react';
import useDocumentTitle from '@rehooks/document-title';

// * Components
import { Slider, Publications, PublicationSlide } from 'components';

// * Utils
import { getRequest } from 'utils/helpers';

// * Sass
import './HomePage.scss';

const HomePage = () => {
  useDocumentTitle('Newsier | Home');
  const [slides, setSlides] = useState(null);

  useEffect(() => {
    getSlides();
  }, []);

  const getSlides = async () => {
    const { status, data } = await getRequest('/publications/popular?count=5');

    if (status === 200)
      setSlides(data);
    else
      setSlides([]);
  }

  return <div className="homePage page">
    <Slider slides={slides} slide={PublicationSlide} />
    <div className="homePage__publicationsSection">
      <h2 className="sectionTitle">publications</h2>
      <Publications url="/publications" />
    </div>
  </div>;
}

export default HomePage;